import Database from "@/backend/libs/db/prisma";
import { NextResponse } from "next/server";

export async function POST(data) {
    try {
        const { email } = await data.json();
        const result = await Database.FindUserByEmail(email);

        if (result){ return NextResponse.json({ user: result });}
        return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
    } catch(error) {
        return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
    }
}