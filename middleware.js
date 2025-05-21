import { NextResponse } from "next/server"
import { getToken } from 'next-auth/jwt';


export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET});

    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith("/admin")){
        if (!token){
            const url = req.nextUrl.clone();
            url.pathname = "/login";
            return NextResponse.redirect(url);
        }

        if (token.role !== "admin"){
            const url = req.nextUrl.clone();
            url.pathname = "/login";
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }

    if (pathname.startsWith("/cart")){
        if (!token){
            const url = req.nextUrl.clone();
            url.pathname = "/login";
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }

    if (pathname.startsWith("/profile")){
        if (!token){
            const url = req.nextUrl.clone();
            url.pathname = "/login";
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}

// middleware.ts (no final do arquivo)
export const config = {
  matcher: ['/admin/:path*', '/admin', '/cart', '/cart/:path*', '/profile', '/profile/:path*'],
};
