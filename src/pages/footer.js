import React from 'react';
import { Link } from 'gatsby';


const FooterPage = () => {
    return (
        <>

            <h1>Footer</h1>
            {/* This is how you build a footer. */}
            <footer className="bg-red">
                <div className="bg-red ">
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/portfolio'>Portfolio</Link>
                    </nav>
                    <div>
                        <a href='https://twitter.com/@CJGerena'>@CJGerena</a>
                        <a href='https://linkedin.com/cjgerena'>LinkedIn</a>
                        <a href='https://github.com/cjgerena'>GitHub</a>
                        <a href='https://instagram.com/cjgerena'>The Gram!</a>
                    </div>
                    <p>© Copyright - 2022; Casey Gerena Jr, All rights reserved</p>
                </div>

            </footer>


        </>
    );
}

export default FooterPage;