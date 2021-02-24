import {createSlice,PayloadAction} from "@reduxjs/toolkit";
export interface Tag {
    name:string,
    id:number,
    selected?:boolean
}
export const tags:Array<Tag>=[
    {
        name:'官网',
        id:1
    },
    {
        name:'内部系统',
        id:2
    },
    {
        name:'APP',
        id:3
    },{
        name:'监控平台',
        id:4
    }
]

const tagsSlice=createSlice({
    name:'tags',
    initialState:tags,
    reducers:{
        'toggleTag':(state,action:PayloadAction<{id:number}>)=>{
            let id=action.payload.id;
            let selectTag=state.find((company)=>{return company.id==id });
            if(selectTag!==undefined){
                selectTag.selected=!selectTag.selected;
            }
        },
        'resetTags':(state)=>{
            state.forEach((tag)=>{
                tag.selected=false;
            })
        }
    },
})
export const {toggleTag,resetTags}=tagsSlice.actions;
export default tagsSlice.reducer;