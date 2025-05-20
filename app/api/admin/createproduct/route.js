import Database from "@/backend/libs/db/prisma";
import { NextResponse } from "next/server";

export async function POST(data){
    try{
        const { name, price, category, size, image, description } = await data.json();
        
        const parsedPrice = parseFloat(
            typeof price === "string" ? price.replace(",", ".") : price
        );

        const parsedSize = typeof size === "string" ? parseInt(size) : size;

        if (!name || !price || !category || !size || !image || !description) {
            return NextResponse.json({error: "All fields are required"}, {status: 400});
        }

        const product = await Database.CreateProduct(name, parsedSize, category, size, image, description)

        if (product){
            return NextResponse.json({success: true, product})
        }
        return NextResponse.json({success: false})
    } catch (error){
        return NextResponse.json({error: error.message}, {status: 500})
    }

}