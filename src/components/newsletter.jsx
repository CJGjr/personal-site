import React from 'react';
import { Link } from 'gatsby';

const Newsletter = () => {
    return (
        <>
        <div>
            <form>
                <label>Email address</label>
                <input id="email-address" type="email" />
                <button type="submit">Subscribe</button>
            </form>

        </div>
        </>
    )
}

export default Newsletter;