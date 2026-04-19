import { NextRequest, NextResponse } from 'next/server'

export default function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl

    const adminToken = req.cookies.get("ADMIN")?.value

    if (pathname.startsWith("/admin") && !adminToken) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/:path*"]
}