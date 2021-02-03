import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Company {
    name:string,
    id:number,
    selected?:boolean
}
const companies:Array<Company>=[
    {
        name:'德银股份',
        id:1
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
        name:'德银租赁',
        id:4
    },
    {
        name:'美信经纪',
        id:5
    },
    {
        name:'德银保理',
        id:6
    },
    {
        name:'陕汽控股',
        id:7
    },
    {
        name:'陕汽商用车',
        id:8
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