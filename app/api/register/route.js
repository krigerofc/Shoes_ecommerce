'use server'
import { NextResponse } from "next/server";
import Database from "@/backend/libs/db/prisma";

export async function POST(req) {
  try {
    const {name, email, password} = await req.json()
    const user = await Database.CreateUser(name, email, password)
    if (user){
      return NextResponse.json({ success: true, user:user})
    }
    return NextResponse.json({ success: false })
  } catch (error) {
    // Retorne um erro caso a criação falhe
    return NextResponse.json({ success: false, error: error.message })
  } 
}