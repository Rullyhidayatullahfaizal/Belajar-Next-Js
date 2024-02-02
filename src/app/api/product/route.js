import { NextRequest,NextResponse } from "next/server";

const data = [
    {
        id:1,
        name:"nike",
        price:50000,
        Image:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png"
    },
    {
        id:2,
        name:"nike dunk low",
        price:150000,
        Image:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png"
    },
    {
        id:3,
        name:"nike air jordan",
        price:150000,
        Image:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/6fc782b0-9c16-49e2-b6bf-88aa015e974e/air-jordan-1-low-shoes-6Q1tFM.png"
    }
    ,
    {
        id:4,
        name:"nike air jordan",
        price:150000,
        Image:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/6fc782b0-9c16-49e2-b6bf-88aa015e974e/air-jordan-1-low-shoes-6Q1tFM.png"
    }
    ,
    
    {
        id:5,
        name:"nike air jordan",
        price:150000,
        Image:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/6fc782b0-9c16-49e2-b6bf-88aa015e974e/air-jordan-1-low-shoes-6Q1tFM.png"
    }
]

export async function GET(NextRequest){
    console.log(NextRequest)
    return NextResponse.json({ status: 200, message: "success", data });
}