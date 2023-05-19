import React, { useState } from "react";

const Features = () => {


    const [featureImg, setFeatureImg] = useState<string>("https://senior.ceng.metu.edu.tr/2022/DIP/images/graphical_dashboard.png");
    const [feature, setFeature] = useState<string>("Turkey Map for results")
    const [color, setColor] = useState<string>("blue");
    
    const featureImgs: { [name: string]: string } = {
        "Turkey Map for results": "https://senior.ceng.metu.edu.tr/2022/DIP/images/graphical_dashboard.png",
        "Ballot Box Transactions": "https://senior.ceng.metu.edu.tr/2022/DIP/images/advanced_statistics.png",
        "Admin Dashboard": "https://senior.ceng.metu.edu.tr/2022/DIP/images/advanced_statistics.png",
        "Mobile Application": "https://senior.ceng.metu.edu.tr/2022/DIP/images/advanced_statistics.png",
        "Conflicting results": "https://senior.ceng.metu.edu.tr/2022/DIP/images/graphical_dashboard.png"
    }

    const featureTitles = ["Turkey Map for results", "Ballot Box Transactions", "Admin Dashboard", "Mobile Application", "Conflicting results"]
    return (
        <div className='w-full mt-10 mt-20 relative'>
            <h1 className='text-center text-5xl font-bold text-slate-200'>
                Features
            </h1>
            {
                color == "red" ? (
                    <div className='pointer-events-none absolute left-1/2 -z-10 w-4/5 -translate-x-1/2 opacity-5 blur-[100px] h-full bg-red-500 text-shadow-xl shadow-red-500/20'>

                    </div>
                ) : (
                    color == "green" ? (
                        <div className='pointer-events-none absolute left-1/2 -z-10 w-4/5 -translate-x-1/2 opacity-10 blur-[50px] h-full bg-green-500 text-shadow-xl shadow-green-500/50'>

                        </div>
                    ) : (
                        <div className='pointer-events-none absolute left-1/2 -z-10 w-4/5 -translate-x-1/2 opacity-5 blur-[100px] top-32 h-full bg-blue-500 text-shadow-xl shadow-blue-500/20'>

                        </div>
                    )

                )
            }
            <div className='w-full flex flex-wrap justify-between text-white mt-10'>
    
                {featureTitles.map(function (object, i) {
                    if (feature == object) {
                        return <div className='bg-slate-200 text-black  w-1/6 md:w-1/6 p-5 rounded-lg text-center text-xl flex justify-center gap-3 items-center transition ease-in-out hover:scale-110' onClick={() => { setFeatureImg(featureImgs[object]); setFeature(object) }}>
                            <i className="fa-solid fa-map"></i><h1 className='hidden md:block'>{object}</h1>
                        </div>
                    } else {
                        return <div className='bg-slate-200/20 w-1/6 md:w-1/6 p-5 rounded-lg text-center text-xl flex justify-center gap-3 items-center transition ease-in-out hover:scale-110' onClick={() => { setFeatureImg(featureImgs[object]); setFeature(object) }}>
                            <i className="fa-solid fa-map"></i><h1 className='hidden md:block'>{object}</h1>
                        </div>
                    }
                })}


            </div>

            <div className='w-full flex flex-col md:flex-row gap-x-5 mt-10'>
                <div className='w-full md:w-2/5 text-slate-200 text-center p-10 bg-slate-200/20 rounded-lg'>
                    <h1 className='text-2xl font-bold'>{feature}</h1>
                    <ul className="mt-10 text-xl">
                        <li><i className="fa-regular fa-square-check"></i> First item</li>
                        <li><i className="fa-regular fa-square-check"></i> Second item</li>
                        <li><i className="fa-regular fa-square-check"></i> Third item</li>
                    </ul>
                </div>

                <img className="w-[90%] md:w-3/5" src={featureImg}></img>

            </div>
        </div>
    )
}

export default Features;