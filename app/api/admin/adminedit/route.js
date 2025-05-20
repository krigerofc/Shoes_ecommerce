import Database from "@/backend/libs/db/prisma";
import { NextResponse } from "next/server";

export async function  POST(data) {
    try{
    const { id, name, price, category, size, image, description } = await data.json();

    if (!id || !name || !price || !category || !size || !image || !description) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
    }
    
    const edit_product = await Database.ProductEdit(Number(id), name, parseFloat(price), category, Number(size), image, description);

    if(edit_product){
        return NextResponse.json({success: true, edit_product})
    }
    return NextResponse.json({success: false})
    } catch (error){
        return NextResponse.json({success: false}, {error:error.message})
    }
}