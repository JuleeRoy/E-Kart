import React from 'react'
import HeroComponent from './components/HeroComponet'
import { useProductContext } from './context/ProductContext';

const About = () => {
  const mydata={
    name:"About us"
  }

  const NAME = useProductContext();;
  
  return (
    <>
    {NAME.myLove}
    <HeroComponent myData={mydata}/>
    </>
  )
}

export default About