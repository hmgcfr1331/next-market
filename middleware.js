import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request){
    const token = await request.headers.get("Authorization")?.split(" ")[1]
    //const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRhcm9AZ21haWwuY29tIiwiZXhwIjoxNzU0MjkzNzgyfQ.DLns7FYfgYyeHCr3s56T7qEtRHfYcXuo-XD9WMc_Px0"
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodeJwt = await jwtVerify(token, secretKey)
        return NextResponse.next()
    }catch{
        return NextResponse.json({message: "トークンが正しくないので、ログインしてください"})
    }
}
export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}