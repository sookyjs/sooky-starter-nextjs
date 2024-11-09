'use client'
import Link from "next/link";

function Header () {

    return (
        <header>
        <div className="mx-auto border-b px-4 sm:px-6 lg:px-8 bg-zinc-100/40 dark:bg-zinc-800/40">
            <div className="mx-auto flex h-16 items-center justify-between max-w-screen-xl">
            <div className="md:flex md:items-center md:gap-12">
                <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
                </Link>
            </div>

            <div className="hidden md:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                    <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="#"
                    >
                        About
                    </Link>
                    </li>

                    <li>
                    <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="#"
                    >
                        Pricing
                    </Link>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                <Link href="/auth/sign-in" className="rounded-full hover:bg-teal-600 px-5 py-2.5 text-sm font-medium hover:text-white shadow mr-1">
                    Login
                </Link>
                <Link href="/auth/sign-up" className="rounded-full bg-teal-600 hover:bg-teal-700 px-5 py-2.5 text-sm font-medium text-white shadow">
                    Register
                </Link>
                </div>
            </div>
            </div>
        </div>
        </header>
    )
}

export default Header