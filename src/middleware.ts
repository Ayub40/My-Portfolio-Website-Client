// export { default } from "next-auth/middleware";
// console.log("af");
// export const config = { matcher: ["/dashboard"] };

// export const config = { matcher: ["/dashboard/:path*"] };
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { auth } from './auth';
import { getToken } from 'next-auth/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.AUTH_SECRET,
    });
    console.log("Token from middleware", token);

    if (!token) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};