import Link from "next/link"

import { UserAuthForm } from "@/components/user-auth-form-sign-in"

export default async function SignIn() {
    
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/"
                className="absolute left-4 top-4 md:left-8 md:top-8"
            >
                <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                    Home
                </>
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Sign in
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email and password to sign in to your account
                    </p>
                </div>
                <UserAuthForm />
                <p className="px-8 text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?
                    <Link
                        href="/auth/sign-up"
                        className="hover:text-brand underline underline-offset-4"
                    >
                    &nbsp;Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}