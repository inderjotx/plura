import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export default authMiddleware({
    publicRoutes: ['/', '/site'],

    async afterAuth(auth, req, evt) {

        const url = req.nextUrl
        const pathname = url.pathname
        let subdomain = req.headers.get('x-forwarded-host')?.split(process.env.NEXT_PUBLIC_HOSTNAME!).filter(Boolean)[0]?.replace('.', '')

        let searchParams = url.searchParams.toString()
        searchParams = (searchParams.length > 0) ? "?" + searchParams : searchParams

        const hostname = url.host || process.env.NEXT_PUBLIC_HOST
        const port = url.port || process.env.NEXT_PUBLIC_PORT

        if (subdomain) {
            console.log('subdomain')
            console.log(subdomain)
            return NextResponse.rewrite(new URL(`/${subdomain}${pathname}${searchParams}`, req.url))
        }


        if (pathname === '/sign-in' || pathname === '/sign-up') {
            return NextResponse.rewrite(new URL(`/agency${pathname}${searchParams}`, req.url))
        }


        if (pathname === '/' || pathname === '/site') {
            return NextResponse.rewrite(new URL('/site', req.url))
        }



        if (pathname.startsWith('/agency') || pathname.startsWith('/subaccount')) {
            return NextResponse.rewrite(new URL(req.url))
        }
    }
});

export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/(api|trpc)(.*)"
    ]
};