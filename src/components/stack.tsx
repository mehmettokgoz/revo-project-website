import React from "react";

const Stack = () => {
    return (
        <div className='w-full mt-10 mt-20'>
            <h1 className='text-center text-5xl font-bold text-slate-200'>
                Tech Stack
            </h1>

            <div className='mt-10 md:mt-20 text-white'>
                <div className='flex flex-wrap justify-center gap-y-10 md:mx-24'>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/5'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://cryptologos.cc/logos/avalanche-avax-logo.png'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400'>Avalanche</h4>
                        <p className='opacity-40 w-[95%] text-center'>Graph protocol allows us to implement well-defined indexer for our smart contract by listening events. It creates a backup for fast querying using GraphQL.</p>
                    </a>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/5'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://cryptologos.cc/logos/the-graph-grt-logo.png'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400'>The Graph</h4>
                        <p className='opacity-40 w-[95%] text-center'>Graph protocol allows us to implement well-defined indexer for our smart contract by listening events. It creates a backup for fast querying using GraphQL.</p>
                    </a>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/5'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://sanalvm.com/wp-content/uploads/2022/12/pngegg-1-1.png'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400'>React Framework</h4>
                        <p className='opacity-40 w-[95%] text-center'>Graph protocol allows us to implement well-defined indexer for our smart contract by listening events. It creates a backup for fast querying using GraphQL.</p>
                    </a>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/5'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400'>Spring Boot</h4>
                        <p className='opacity-40 w-[95%] text-center'>Graph protocol allows us to implement well-defined indexer for our smart contract by listening events. It creates a backup for fast querying using GraphQL.</p>
                    </a>

                    <a className='group/investor inline-flex w-1/2 flex-col items-center md:w-1/5'>
                        <img className='aspect-square h-[80px] w-[80px] scale-[1.01] rounded-full object-cover grayscale transition group-hover/investor:mix-blend-normal group-hover/investor:grayscale-0 md:h-[100px] md:w-[100px]' src='https://sanalvm.com/wp-content/uploads/2022/12/pngegg-1-1.png'></img>
                        <h4 className='mt-4 font-display text-xl font-medium transition group-hover/investor:text-emerald-400'>React Native</h4>
                        <p className='opacity-40 w-[95%] text-center'>Graph protocol allows us to implement well-defined indexer for our smart contract by listening events. It creates a backup for fast querying using GraphQL.</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Stack;