import { NextResponse } from "next/server";
import Database from "@/backend/libs/db/prisma";

export async function POST(req) {
    try {
        const { userId } = await req.json();

        const items = await Database.GetCartItemsByUser(userId);
        return NextResponse.json({ items });
    } catch (error) {
        return NextResponse.json({ items: [] }, { status: 500 });
    }
}