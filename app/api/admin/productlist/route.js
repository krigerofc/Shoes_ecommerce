import Database from "@/backend/libs/db/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try{
        const products = await Database.Productlist();
        if (products){
            return NextResponse.json(products);
        }
        return NextResponse.json({success: false})
    }catch (error){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}