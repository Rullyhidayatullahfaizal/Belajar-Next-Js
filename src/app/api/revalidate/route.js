import { revalidateTag } from "next/cache"
import { NextRequest,NextResponse } from "next/server"


export async function POST(NextRequest){
    const tag = NextRequest.nextUrl.searchParams.get("tag")

    if(!tag){
        return NextResponse.json({status:400,message:"mmisiing tag params"})
    }

    revalidateTag(tag);
    return NextResponse.json({revalidate:true,now:Date.now()})

}