interface Rq {
    img:string,
    tit:string
}
export interface AppContent {
   title:string,
   link?:string,
   tel?:string,
    rq?:[Rq,Rq]
}
export const apps:Array<AppContent>=[
    {
        title:'车轮滚滚',
        link:'https://www.clgg.com',
        tel:'400-888-1122'
    }
    ,{
        title:'远行供应链官网',
        link:'http://yuanxinggroup.com/',
        tel:'400-888-1122'
    }
    ,{
        title:'贴心天行健',
        link:'http://www.sqtxj.com/'
    }
    ,{
        title:'陕汽控股',
        link:'http://www.sxqc.com'
    }
    ,{
        title:'陕汽商用车',
        link:'http://www.hsqc.com.cn/'
    }
    ,{
        title:'德银融资租赁',
        link:'https://www.deewinfl.com/'
    }
    ,{
        title:'美信保险经纪',
        link:'http://www.meixinsh.com/',
        tel:'021-52416660'
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
        ]
    }
];


