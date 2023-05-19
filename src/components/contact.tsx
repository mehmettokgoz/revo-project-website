import React, { useState } from "react";

const Contact = () => {

    const mails = [
        "fazli.balkan@metu.edu.tr",
        "mehmet.tokgoz@metu.edu.tr",
        "onur.yuce@metu.edu.tr",
        "tunahan.dundar@metu.edu.tr",
        "mirza.oksuz@metu.edu.tr"
    ]

    return (
        <div className='w-full mt-10 mt-20 relative'>
            <h1 className='text-center text-5xl font-bold text-slate-200'>
                Contact
            </h1>

            <h1 className="text-center text-xl text-white/50 mt-5">Feel free to DM us through the following e-mails.</h1>
            <div className="mt-10 text-center text-white text-xl flex flex-col gap-y-3">
                {
                    mails.map(function (object, i) {
                        return <a className="text-xl hover:text-emerald-400" href={"mailto:"+object}>{object}</a>
                    })
                }
            </div>
        </div>
    )
}

export default Contact;
