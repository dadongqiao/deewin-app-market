import React, {FC} from "react";
import './css/nav.css';
import {Company} from "./companiesSlice";
import{useDispatch} from "react-redux";
import {selectCompany,unSelectCompanies} from './companiesSlice';
import {resetTags} from './tagsSlice'

interface ComponentProps {
    companies:Array<Company>,
    hasSelectedCompany:boolean
}
const Navs:FC<ComponentProps>=function(props){
    let companies=props.companies;
    let hasSelectedCompany=props.hasSelectedCompany;
    /*let companiesSize:number=companies.length;
    let displayIndex=3;
    let displayLength=6;
    let dispatch=useDispatch();
    let  selectedIndex:number|undefined=undefined;
    let displayCompanies=companies;
    if(hasSelectedCompany){
        selectedIndex=companies.findIndex((item)=>{
            return item.selected;
        })
        if(selectedIndex-3<=0){
           displayCompanies=companies.slice(0,displayLength);
        }else if(selectedIndex+2>=companiesSize-1){
            displayCompanies=companies.slice(companiesSize-6)
        }else{
            displayCompanies=companies.slice(selectedIndex-3,selectedIndex+2+1)
        }
    }else{
        displayCompanies=companies.slice(0,6)
    }*/
    let dispatch=useDispatch();
    let displayCompanies=companies;
    return(
        <div id="navs">
            <div className="navWrap">
                {hasSelectedCompany?(
                    <div style={{zIndex:101}} onClick={()=>{dispatch(unSelectCompanies());dispatch(resetTags())}}  className='nav'>全部</div>
                ):(
                    <div style={{zIndex:101}}  className='nav cur'>全部</div>
                )}
                {
                    displayCompanies.map((company,index)=>{
                      if(company.selected){
                          return (<div style={{zIndex:102}} key={company.id} className='nav cur'>{company.name}</div>)
                      }
                      return (<div onClick={()=>{dispatch(selectCompany({id:company.id}));dispatch(resetTags())}} style={{zIndex:(100-index)}} key={company.id} className='nav'>{company.name}</div>);
                  })
                }

            </div>
          <div className="nav-bottom"></div>
        </div>
    )
}
export default Navs;