import React from 'react';
import './css/App.css';
import Banner from "./banner";
import AppItem from "./AppItem";
import Navs from "./Navs";
import Filter from "./Filter";
import{useSelector,useDispatch} from "react-redux";
import {RootState} from "./app/rootReducer";
import {AppContent} from "./appsSlice";
import {Tag} from "./tagsSlice";
import {Company} from "./companiesSlice";

function filterAppsByCompany(apps:Array<AppContent>,selectedCompany?:Company):Array<AppContent>{
    if(!selectedCompany){
        return apps;
    }
    return apps.filter((app)=>{
        return app.companyId===selectedCompany.id
    })
}
function filterAppsByTags(apps:Array<AppContent>,selectedTags:Array<Tag>|[]):Array<AppContent>{
    if(selectedTags.length===0){
        return apps;
    }
    let tagIdArray:Array<number>=[];
    selectedTags.forEach((tag)=>{
        tagIdArray.push(tag.id);
    })
    return apps.filter((app)=>{
          if(app.tags!==undefined){
              return app.tags.some((id)=>{
                  return tagIdArray.includes(id);
              })
          }
    })
}

function filterTagsByApps(tags:Array<Tag>,apps:Array<AppContent>):Array<Tag>{
    return tags.filter((tag)=>{
             return apps.some((app)=>{
                 if(app.tags!==undefined){
                     return app.tags.includes(tag.id);
                 }
             })
    })
}


const App=function() {
    const{apps,tags,companies}=useSelector((state:RootState)=>{
        return{...state};
    })
    let hasSelectedCompany=companies.some((company)=>{
        return company.selected;
    })
    let hasSelectedTag=tags.some((tag)=>{
        return tag.selected;
    })
    let selectedCompany=companies.filter((company)=>{ return company.selected})[0];
    let selectedTags=tags.filter((tag)=>{return tag.selected});
    let appsByCompany=filterAppsByCompany(apps,selectedCompany);
    let tagsByApps=filterTagsByApps(tags,appsByCompany);
    let appsByTags=filterAppsByTags(appsByCompany,selectedTags);
  return (
    <div className="App">
        <Banner/>
        <div className='wrap'>
          <Navs companies={companies} hasSelectedCompany={hasSelectedCompany}/>
          <Filter tags={tagsByApps} hasSelectedTag={hasSelectedTag}/>
           <div className="appsWrap">
               <div className='clear'></div>
               {
                   appsByTags.map((app,index)=>{
                       return <AppItem app={app} index={index}/>
                   })
               }
           </div>
        </div>
    </div>
  );
}

export default App;
