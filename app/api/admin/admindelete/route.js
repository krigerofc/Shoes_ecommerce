import Database from "@/backend/libs/db/prisma";
import { NextResponse } from "next/server";

export async function POST(data) {
    try{
    const { id } = await data.json()

    if (!id){
        return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
    }

    const deleted = await Database.DeleteProduct(Number(id));

    if (deleted && !deleted.code){
        return NextResponse.json({success:true, deleted})
    }

    return NextResponse.json({success:false})
    } catch(error){
        return NextResponse.json()
    }
}