import React from 'react'
import HeroComponet from './components/HeroComponet';
import Service from './components/Service';
import Trusted from './components/Trusted';
import Featured from './components/Featured';

const Home = () => {

  const data={
    name:"E-Cart"
  }

  return (
   <>
   <HeroComponet myData={data}/>
   <Featured/>
   <Service/>
   <Trusted/>
   </>
  )
};







export default Home