import React, { useState } from "react";

const Header = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    return (<>
        <div className='w-full pt-16 pb-10 flex flex-row justify-between'>
            <div className="flex flex-row">
                <h1 className="text-center text-4xl font-bold text-slate-200">
                    REVO
                </h1>
            </div>

            <ul className='hidden md:flex text-slate-200 flex flex-row gap-7 text-lg mt-6 md:mt-0 text-center'>
                <li>Our Mission</li>
                <li>How it works?</li>
                <li>Our Team</li>
                <li>Contact</li>
            </ul>

            <div className="md:hidden text-white" onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen) }}>
                MENU
            </div>


        </div>
        {isMobileMenuOpen ?
            <div className="text-white md:hidden absolute p-5 bg-slate-200 w-[90%] h-auto">Menule menu open</div>
            :
            (<></>)
        }
    </>

    )
}

export default Header;