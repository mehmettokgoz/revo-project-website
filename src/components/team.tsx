import React, { useState } from "react";

const Team = () => {

    const [color, setColor] = useState<string>("green");
    
    return (
        <div className='w-full mt-10 mt-20 relative'>
            <h1 className='text-center text-5xl font-bold text-slate-200'>
                Our team
            </h1>

            {
                color == "red" ? (
                    <div className='pointer-events-none absolute left-1/2 -z-10 w-4/5 -translate-x-1/2 opacity-5 blur-[100px] top-32 h-full bg-red-500 text-shadow-xl shadow-red-500/20'>

                    </div>
                ) : (
                    color == "green" ? (
                        <div className='pointer-events-none absolute left-1/2 -z-10 w-4/5 -translate-x-1/2 opacity-5 blur-[100px] top-32 h-full bg-green-500 text-shadow-xl shadow-green-500/20'>

                        </div>
                    ) : (
                        <div className='pointer-events-none absolute left-1/2 -z-10 w-4/5 -translate-x-1/2 opacity-5 blur-[100px] top-32 h-full bg-blue-500 text-shadow-xl shadow-blue-500/20'>

                        </div>
                    )

                )
            }

            <div className='mt-10 md:mt-20 text-white'>
                <div className='flex flex-wrap justify-center gap-y-10 md:mx-24'>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/4'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] rounded-full object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://senior.ceng.metu.edu.tr/2023/revo/images/ebruaydin.jpeg'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400 group-hover/investor:underline'>Ebru Aydın Göl</h4>
                        <p className='opacity-40'>Mentor</p>
                    </a>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/4'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] rounded-full object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://senior.ceng.metu.edu.tr/2023/revo/images/fazli.jpg'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400 group-hover/investor:underline'>Fazlı Balkan</h4>
                        <p className='opacity-40'>Backend</p>
                    </a>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/4'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] rounded-full object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://senior.ceng.metu.edu.tr/2023/revo/images/mehmet.jpg'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400 group-hover/investor:underline'>Mehmet Tokgöz</h4>
                        <p className='opacity-40'>Indexer</p>
                    </a>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/4'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] rounded-full object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://senior.ceng.metu.edu.tr/2023/revo/images/onur.jpg'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400 group-hover/investor:underline'>Onur Yüce</h4>
                        <p className='opacity-40'>Chain</p>
                    </a>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/4'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] rounded-full object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://senior.ceng.metu.edu.tr/2023/revo/images/tuna.jpeg'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400 group-hover/investor:underline'>Tunahan Dündar</h4>
                        <p className='opacity-40'>Frontend</p>
                    </a>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/4'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] rounded-full object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://senior.ceng.metu.edu.tr/2023/revo/images/mirza.jpg'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400 group-hover/investor:underline'>Yusuf Mirza Altay</h4>
                        <p className='opacity-40'>Mobile</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Team;