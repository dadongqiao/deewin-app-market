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
        title:'远行销售管理系统',
        link:'http://ts.clgg.com:81',
        tel:'400-888-222'
    },

    {
        title:'远行销售管理系统',
        rq:[{img:'https://www.clgg.com/static/images/QR.4446bb29ac8dc76278e1fedc40354c21.png',tit:'安卓'},
            {img:'https://www.clgg.com/static/images/QR.4446bb29ac8dc76278e1fedc40354c21.png',tit:'IOS'}]

    },
    {
        title:'远行销售管理系统',
        link:'http://ts.clgg.com:81'
    },
    {
        title:'远行销售管理系统',
        link:'http://ts.clgg.com:81'
    }
];


