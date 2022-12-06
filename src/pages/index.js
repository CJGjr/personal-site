import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => (
    <>
    <h1>Hey this is my first website</h1>
    <a href="https://google.com">Google.com - External Link</a>
    <br />
    <Link to='/about'>My About Page - Internal Link</Link>
    <br />
    <Link to='/portfolio'>My Portfolio Page - Internal Link</Link>
    </>
)

export default IndexPage;