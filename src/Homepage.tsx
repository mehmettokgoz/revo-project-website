import React, { useState } from 'react';
import Stack from './components/stack';
import Features from './components/features';
import Motto from './components/motto';
import Team from './components/team';
import Demo from './components/demo';
import Header from './components/header';
import HowItWorks from './components/hiw';
import Mission from './components/mission';
import Contact from './components/contact';

function Homepage() {

    return (

        <div className='w-[90%] md:max-w-7xl mx-auto mb-20'>

            <Header></Header>

            <Motto></Motto>

            <Mission></Mission>

            <HowItWorks></HowItWorks>

            <Demo></Demo>

            <Features></Features>

            <Stack></Stack>

            <Team></Team>

            <Contact></Contact>

            <h1 className='text-center text-white text-lg mt-20'>Copyright © 2023 REVO - All rights reserved.</h1>
            <h1 className='text-center text-white text-lg'>The design is inspired from <a className='text-emerald-400' href='https://upstash.com'>Upstash</a>.</h1>
            

        </div>

    );
}

export default Homepage;
