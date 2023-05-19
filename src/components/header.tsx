import React, { useState } from "react";

const Header = () => {

    return (
        <div className='w-full pt-16 pb-10 flex justify-between'>
            <h1 className="text-4xl font-bold text-slate-200">
                REVO
            </h1>
            <ul className='text-slate-200 flex flex-row gap-7 text-lg'>
                <li>Our Mission</li>
                <li>How it works?</li>
                <li>Our Team</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header;