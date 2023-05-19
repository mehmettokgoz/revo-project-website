import React, { useState } from "react";

const HowItWorks = () => {

    return (

        <div className='w-full mt-10 mt-20'>
            <h1 className='text-center text-5xl font-bold text-slate-200'>
                How it works?
            </h1>

            <p className='mt-10 text-slate-200 text-center text-xl'>
                Proje kapsamında, ana blok zincir ağlarındaki yavaşlık ve işlem ücretleri sorunlarından kaçınmak için Avalanche subnet teknolojisini kullanarak özel bir blok zinciri geliştirdik. Hedefimiz, üç saat içinde 600 bin işlemi işleyebilecek bir kapasiteye sahip olmak. Tek bir blok zinciri, bu yükü yönetmek için yeterli olmayacaktır. Bu nedenle, Avalanche Subnet teknolojisi sayesinde sharding yaparak fiziksel olarak blok zincirlerini bölüp hedeflediğimiz etkileşim yükünü yönetebiliriz. Bu amaçla, dört farklı subnet kurmayı planlıyoruz. Oy verileri bu blok zincirlerinde saklanmakta ve veri girişleri akıllı sözleşmeler aracılığıyla denetlenmektedir. Bu sayede, yalnızca yetkilendirilmiş kullanıcılar oy verisi girişi yapabilirler.
            </p>

            <div>
                
            </div>
        </div>
    )
}

export default HowItWorks;