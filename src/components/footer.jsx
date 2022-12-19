import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    console.group('Inside my component Footer.jsx file');
    console.info('Hey this is inside, my footer. Cool!');
    console.groupEnd();
    return (
        <>
            <footer className="bg-white">
                <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                        <Link to='/' className="text-base text-gray-500 hover:text-gray-800">Home</Link>
                        <Link to='/about' className="text-base text-gray-500 hover:text-gray-800">About</Link>
                        <Link to='/portfolio' className="text-base text-gray-500 hover:text-gray-800">Portfolio</Link>
                        <Link to='/blog' className="text-base text-gray-500 hover:text-gray-800">Blog</Link>
                    </nav>
                    <div className="mt-8 flex justify-center space-x-6">
                        <a href='https://twitter.com/@CJGerena' className="text-base text-gray-400 hover:text-gray-500">@CJGerena</a>
                        <a href='https://linkedin.com/cjgerena' className="text-base text-gray-400 hover:text-gray-500">LinkedIn</a>
                        <a href='https://github.com/cjgerena' className="text-base text-gray-400 hover:text-gray-500">GitHub</a>
                        <a href='https://instagram.com/cjgerena' className="text-base text-gray-400 hover:text-gray-500">The Gram!</a>
                        <a href='https://tiktok.com/cjgerena' className="text-base text-gray-400 hover:text-gray-500">TikTok!</a>
                    </div>
                    <p className="mt-8 text-center text-base text-gray-400">© Copyright - 2022; Casey Gerena Jr, All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;