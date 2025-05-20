import Database from "@/backend/libs/db/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try{
    
    const new_shoes = await Database.Newshoes();

    if (new_shoes){
        return NextResponse.json(new_shoes);
    }

    return NextResponse.json({success: false}, {new_shoes})
    } catch(error){
        return NextResponse.json({success: false}, {error:error.message})
    }
}