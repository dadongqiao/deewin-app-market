import {createSlice} from "@reduxjs/toolkit";

interface Rq {
    img:string,
    tit:string
}
export interface AppContent {
    title:string,
    link?:string,
    tel?:string,
    rq?:[Rq,Rq] ,
    companyId:number,
    tags?:Array<number>
}
export const apps:Array<AppContent>=[
    {
        title:'车轮滚滚',
        link:'https://www.clgg.com',
        tel:'400-888-1122',
        companyId:1,
        tags:[1]
    }
    ,{
        title:'远行供应链官网',
        link:'http://yuanxinggroup.com/',
        tel:'400-888-1122',
        companyId:2,
        tags:[1]
    },{
        title:'远行销售管理系统',
        link:'http://ts.clgg.com:81/',
        companyId:2,
        tags:[2]
    }
    ,{
        title:'贴心天行健',
        link:'http://www.sqtxj.com/',
        companyId:3,
        tags:[1]
    },{
        title:'天行健车队管理系统',
        link:'http://www.sqtxj.com/',
        companyId:3
    }
    ,{
        title:'陕汽控股',
        link:'http://www.sxqc.com',
        companyId:7,
        tags:[1]
    }
    ,{
        title:'陕汽商用车',
        link:'http://www.hsqc.com.cn/',
        companyId:8,
        tags:[1]
    }
    ,{
        title:'德银融资租赁',
        link:'https://www.deewinfl.com/',
        companyId:4,
        tags:[1]
    }
    ,{
        title:'美信保险经纪',
        link:'http://www.meixinsh.com/',
        tel:'021-52416660',
        companyId:5,
        tags:[1]
    }
    ,{
        title:'车轮滚滚移动端',
        rq:[
            {
                img:'http://www.clgg.com:9838/upload/driverCircle/202012/30/3e67513b51904939b5f290ed2fba3429.png',
                tit:'安卓'
            },
            {
                img:'http://www.clgg.com:9838/upload/driverCircle/202012/30/138b5200e42d4280803d5c3a0db56fa7.png',
                tit:'IOS'
            }
        ],
        companyId:1,
        tags:[3]
    }
];


const appsSlice=createSlice({
    name:'apps',
    initialState:apps,
    reducers:{
        ' ':(state)=>{}
    },
})

export default appsSlice.reducer;