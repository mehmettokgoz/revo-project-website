import React, { useState } from "react";

const Motto = () => {

    const [color, setColor] = useState<string>("green");

    return (
        <div className='w-full mt-10 text-center'>

            <div className='w-[90%] sm:w-[70%] h-auto mx-auto'>
                {
                    color == "green" ? (
                        <>
                            <div className='pointer-events-none absolute left-1/2 -z-10 w-4/5 -translate-x-1/2 opacity-5 blur-[100px] top-32 h-full bg-green-500 text-shadow-xl shadow-green-500/20'>

                            </div>
                            <h1 className='text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-300'>
                                Blockchain based secure and public vote counting
                            </h1>
                        </>

                    ) : (
                        color == "red" ? (
                            <>
                                <div className='pointer-events-none absolute left-1/2 -z-10 w-4/5 -translate-x-1/2 opacity-5 blur-[100px] top-32 h-full bg-blue-500 text-shadow-xl shadow-blue-500/20'>

                                </div>
                                <h1 className='text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-200 text-shadow-xl shadow-blue-500/20'>
                                    Blockchain based secure and public vote counting
                                </h1>
                            </>

                        ) : (
                            <>
                                <div className='pointer-events-none absolute left-1/2 -z-10 w-4/5 -translate-x-1/2 opacity-5 blur-[100px] top-32 h-full bg-red-500 text-shadow-xl shadow-red-500/20'>

                                </div>
                                <h1 className='text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-200 text-shadow-xl shadow-red-500/20'>
                                    Blockchain based secure and public vote counting
                                </h1>
                            </>

                        )

                    )
                }
            </div>

            <div className='w-[90%] mx-auto flex flex-col sm:flex-row justify-between mt-10 text-white gap-5 md:gap-0'>

                <div className='basis-[32%] bg-white bg-opacity-20 backdrop-blur-xl drop-shadow-lg rounded-xl p-5 transition ease-in-out hover:scale-105' onMouseEnter={() => { setColor("blue") }}>
                    <h1 className='font-bold text-xl'>Secure</h1>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic totam assumenda natus ipsa.<br></br><br></br>Quis aliquam rem possimus magnam. Quisquam unde deleniti mollitia sunt voluptatum illum quis molestias dolore aut?
                    </p>
                </div>

                <div className='basis-[32%] bg-white/20 rounded-xl p-5 transition ease-in-out hover:scale-105' onMouseEnter={() => { setColor("green") }}>
                    <h1 className='font-bold text-xl'>Public</h1>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic totam assumenda natus ipsa <br></br><br></br>Quis aliquam rem possimus magnam. Quisquam unde deleniti mollitia sunt voluptatum illum quis molestias dolore aut?
                    </p>
                </div>

                <div className='basis-[32%] bg-white/20 rounded-xl p-5 transition ease-in-out hover:scale-105' onMouseEnter={() => { setColor("red") }}>
                    <h1 className='font-bold text-xl'>Easy-to-use</h1>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic totam assumenda natus ipsa <br></br><br></br>Quis aliquam rem possimus magnam. Quisquam unde deleniti mollitia sunt voluptatum illum quis molestias dolore aut?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Motto;