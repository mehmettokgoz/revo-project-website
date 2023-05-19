import React, { useState } from "react";

const Demo = () => {

    return (
        <div className='w-full mt-10 mt-20'>
            <h1 className='text-center text-5xl font-bold text-slate-200'>
                Demo
            </h1>

            <div className='flex flex-wrap flex-col md:flex-row text-slate-200 mt-16 relative justify-center gap-x-10'>
                <div className='pointer-events-none absolute -z-10 w-4/5  opacity-5 blur-[100px] h-full bg-red-500 text-shadow-xl shadow-red-500/20'>

                </div>
                <div className='w-[90%] md:w-3/6'>
                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/WfKJ9n4txpQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <img className='w-[90%] md:w-1/6' src='https://senior.ceng.metu.edu.tr/2023/revo/images/poster.png'></img>

            </div>
        </div>
    )
}

export default Demo;