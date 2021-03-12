import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Company {
    name:string,
    id:number,
    selected?:boolean
}
const companies:Array<Company>=[
    {
        name:'陕汽',
        id:7
    },
    {
        name:'德银股份',
        id:1
    },
    {
        name:'德银租赁',
        id:4
    },
    {
        name:'德银保理',
        id:6
    },
    {
        name:'美信经纪',
        id:5
    },
    {
        name:'上海远行',
        id:2
    },
    {
        name:'天行健',
        id:3
    },
    {
        name:'通汇物流',
        id:9
    }


];



const companiesSlice=createSlice({
    name:'companies',
    initialState:companies,
    reducers:{
        'selectCompany':(state,action:PayloadAction<{id:number}>)=>{
             let id=action.payload.id;
            state.forEach((company)=>{
                if(company.id===id){
                    company.selected=true;
                }else {
                    company.selected=false;
                }
            })
        },
        'unSelectCompanies':(state)=>{
            state.forEach((company)=>{
                    company.selected=false;
            })
        }
    }
})

export const {selectCompany,unSelectCompanies}=companiesSlice.actions;
export default companiesSlice.reducer;