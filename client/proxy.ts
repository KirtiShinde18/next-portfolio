import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // Get all cookies (for debugging)
    console.log("ALL COOKIES:", req.cookies.getAll())

    const adminToken = req.cookies.get("ADMIN")?.value
    console.log("ADMIN TOKEN:", adminToken)

    // Protect admin routes
    if (pathname.startsWith("/admin") && !adminToken) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/:path*"]
}