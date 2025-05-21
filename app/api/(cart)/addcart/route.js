
import Database from "@/backend/libs/db/prisma";
import { NextResponse } from "next/server";

export async function POST(data) {
    try{
        const { UserID, ProductID, Quantidade, Tamanho } = await data.json();
        
    const result = await Database.CartAdd(UserID, ProductID, Quantidade, Tamanho);
    if (result){return NextResponse.json(result); }

    return NextResponse.json({ error: "Dados inválidos." }, { error: error.message });
    } catch(error){
        return NextResponse.json({ error: "Dados inválidos." }, { error: error.message });
    }
    
}