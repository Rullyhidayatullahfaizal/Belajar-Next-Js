import { NextResponse } from "next/server"

export function middleware(request){
    const isLogin = true  //false 
    if(!isLogin){
        return NextResponse.redirect(new URL("/login",request.url))
    }
}

export const config = {
    matcher: ['/about',"/dashboard/:path*"]
  }