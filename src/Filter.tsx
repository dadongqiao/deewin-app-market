import React, {FC} from "react";
import './css/bq.css';
import {Tag} from './tagsSlice'
import {useDispatch} from "react-redux";
import {toggleTag,resetTags} from './tagsSlice'

interface ComponentProps {
    tags:Array<Tag>,
    hasSelectedTag:boolean
}
const Filter:FC<ComponentProps>=function(props){
    let tags=props.tags;
    let hasSelectedTag=props.hasSelectedTag;
    let dispatch=useDispatch();
    return(
        <div id="bq">
            <div className="bq-icon">
                标签分类
            </div>
            <div className="bqs">

                {
                    hasSelectedTag?(
                    <span  className='bq' onClick={()=>{dispatch(resetTags())}}>全部分类</span>
                    ):(
                    <span  className='bq cur'>全部分类</span>
                    )
                }
                {
                    tags.map((tag)=>{
                    if(tag.selected){
                        return <span onClick={()=>{dispatch(toggleTag({id:tag.id}))}} key={tag.id} className='bq cur'>{tag.name}</span>
                   }else {
                       return <span onClick={()=>{dispatch(toggleTag({id:tag.id}))}} key={tag.id} className='bq'>{tag.name}</span>
                    }
                    })
                }


            </div>
        </div>
    )
}

export default Filter;