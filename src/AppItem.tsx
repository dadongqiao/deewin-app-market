import React from "react";
import'./css/appItem.css';
import {AppContent} from "./appsSlice";

const AppItem:React.FC<{app:AppContent,index:number}>=function(props){
    return(
        <div className='appItemWrap'>
            <div className="num">
                {props.index+1<10?'0'+(props.index+1):(props.index+1)+''}
            </div>

        <div className='appItem'>
            <div className='tit'>
                {props.app.title}
            </div>
            {props.app.rq?(
                <div className='rq'>
                    {props.app.rq.map((item)=>
                        <div className="rqItem">
                            <img src={item.img} alt=""/>
                            <span className="tit">{item.tit}</span>
                        </div>
                    )}

                </div>
            ):(
                <div className="content">
                    {props.app.link&&<div className='link'><a title={props.app.link} href={props.app.link} target='_blank'>{props.app.link}</a></div>}
                    {props.app.tel&&<div className='tel'>{props.app.tel}</div>}
                </div>
            )}

        </div>
        </div>
    )
}
export default AppItem;