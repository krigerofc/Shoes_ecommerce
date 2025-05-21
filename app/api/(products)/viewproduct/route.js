import Database from "@/backend/libs/db/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id } = await req.json();
    const tenis = await Database.GetShoeById(Number(id));
    if (tenis) {
      return NextResponse.json(tenis);
    }
    return NextResponse.json({ success: false, message: "Tênis não encontrado" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}""