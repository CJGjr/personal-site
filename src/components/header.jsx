// This section is for imports
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    // You can write Javascript here

    return (
        // You can write HTML
        <>
            <section className="relative">
                <div className="absolute z-10 hidden lg:block left-0 top-0 max-w-xs w-full h-full bg-indigo-100"></div>
                <div className="container mx-auto overflow-hidden">
                    <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
                        <div className="w-auto">
                            <div className="flex flex-wrap items-center">
                                <div className="w-auto mr-14">
                                    <a href="#">
                                        <StaticImage src="../images/logos/flaro-logo-black.svg" alt="" />
                                    </a>
                                </div>
                                <div className="w-auto hidden lg:block">
                                    <ul className="flex items-center mr-16">
                                        <li className="mr-9 font-medium hover:text-gray-700"><a href="#">Features</a></li>
                                        <li className="mr-9 font-medium hover:text-gray-700"><a href="#">Solutions</a></li>
                                        <li className="mr-9 font-medium hover:text-gray-700"><a href="#">Resources</a></li>
                                        <li className="font-medium hover:text-gray-700"><a href="#">Pricing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto">
                            <div className="flex flex-wrap items-center">
                                <div className="w-auto hidden mr-5 lg:block">
                                    <div className="inline-block">
                                        <button className="py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200" type="button">Sign In</button>
                                    </div>
                                </div>
                                <div className="w-auto hidden lg:block">
                                    <div className="inline-block">
                                        <button className="py-3 px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button">Create Free Account</button>
                                    </div>
                                </div>
                                <div className="w-auto lg:hidden">
                                    <a href="#">
                                        <svg className="navbar-burger text-indigo-600" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                                            <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                        <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                            <div className="flex flex-wrap justify-between h-full">
                                <div className="w-full">
                                    <div className="flex items-center justify-between -m-2">
                                        <div className="w-auto p-2">
                                            <a className="inline-block" href="#">
                                                <StaticImage src="../images/logos/flaro-logo-black.svg" alt="" />
                                            </a>
                                        </div>
                                        <div className="w-auto p-2">
                                            <a className="navbar-burger" href="#">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center py-16 w-full">
                                    <ul>
                                        <li className="mb-12"><a className="font-medium hover:text-gray-700" href="#">Features</a></li>
                                        <li className="mb-12"><a className="font-medium hover:text-gray-700" href="#">Solutions</a></li>
                                        <li className="mb-12"><a className="font-medium hover:text-gray-700" href="#">Resources</a></li>
                                        <li><a className="font-medium hover:text-gray-700" href="#">Pricing</a></li>
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-end w-full pb-8">
                                    <div className="flex flex-wrap">
                                        <div className="w-full mb-3">
                                            <div className="block">
                                                <button className="py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200" type="button">Sign In</button>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="block">
                                                <button className="py-3 px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button">Create Free Account</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="relative z-20 overflow-hidden pt-12 pb-28">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap xl:items-center -m-8">
                            <div className="w-full md:w-1/2 xl:w-auto p-8 xl:p-12">
                                <div className="md:inline-block relative">
                                    <div className="overflow-hidden rounded-lg">
                                        <StaticImage className="w-full md:w-auto rounded-lg transform hover:scale-105 transition ease-in-out duration-1000" src="../images/headers/woman.jpeg" alt="" />
                                    </div>
                                    <div className="p-8 absolute bottom-0 left-0 w-full">
                                        <div className="p-11 bg-black bg-opacity-70 backdrop-blur-xl rounded-lg">
                                            <p className="mb-6 text-sm text-white text-opacity-60 font-semibold uppercase tracking-px">Trusted and loved by 100+ tech first teams</p>
                                            <div className="flex flex-wrap items-center -m-3">
                                                <div className="w-auto p-3">
                                                    <StaticImage src="../images/logos/brands/brand-light.png" alt="" />
                                                </div>
                                                <div className="w-auto p-3">
                                                    <StaticImage src="../images/logos/brands/brand-light2.png" alt="" />
                                                </div>
                                                <div className="w-auto p-3">
                                                    <StaticImage src="../images/logos/brands/brand-light3.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 xl:flex-1 p-8 xl:p-12">
                                <div className="xl:max-w-2xl">
                                    <h1 className="mb-7 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">Build online business from home without taking the hassle.</h1>
                                    <p className="mb-9 text-lg text-gray-900 font-medium md:max-w-md">Get the best-in-class group mentoring plans and professional benefits for your team</p>
                                    <div className="mb-16 p-1.5 xl:pl-7 inline-block md:max-w-xl w-full border-2 border-black rounded-3xl focus-within:ring focus-within:ring-indigo-300">
                                        <div className="flex flex-wrap items-center">
                                            <div className="w-full xl:flex-1">
                                                <input className="p-3 xl:p-0 xl:pr-7 w-full text-gray-600 placeholder-gray-600 outline-none" id="headerInput3-1" type="text" placeholder="Enter email to get started" />
                                            </div>
                                            <div className="w-full xl:w-auto">
                                                <div className="block">
                                                    <button className="py-4 px-7 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Get started for free</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center -m-16">
                                        <div className="w-auto p-16">
                                            <div className="flex flex-wrap -m-0.5 mb-3">
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z" fill="#00B67A"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z" fill="#00B67A"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z" fill="#00B67A"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z" fill="#00B67A"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z" fill="#00B67A"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -m-0.5 mb-2.5">
                                                <div className="w-auto p-0.5">
                                                    <p className="text-gray-900 font-bold">4.2/5</p>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <p className="text-gray-600 font-medium">(45k Reviews)</p>
                                                </div>
                                            </div>
                                            <StaticImage src="../images/logos/brands/brand-trustpilot.png" alt="" />
                                        </div>
                                        <div className="w-auto">
                                            <div className="h-16 w-px bg-gray-200"></div>
                                        </div>
                                        <div className="w-auto p-16">
                                            <div className="flex flex-col justify-between">
                                                <div className="flex flex-wrap -m-0.5 mb-3">
                                                    <div className="w-auto p-0.5">
                                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z" fill="#FF9D28"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="w-auto p-0.5">
                                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z" fill="#FF9D28"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="w-auto p-0.5">
                                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z" fill="#FF9D28"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="w-auto p-0.5">
                                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z" fill="#FF9D28"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="w-auto p-0.5">
                                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z" fill="#FF9D28"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap -m-0.5 mb-4">
                                                    <div className="w-auto p-0.5">
                                                        <p className="text-gray-900 font-bold">4.1/5</p>
                                                    </div>
                                                    <div className="w-auto p-0.5">
                                                        <p className="text-gray-600 font-medium">(18k Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <StaticImage src="../images/logos/brands/brand-capterra.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// Name of the component
export default Header;