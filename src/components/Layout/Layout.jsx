import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Router from '../../routers/Router'
import GotoTop from '../../pages/GotoTop'
export default function Layout() {
  return (
    <>
    <Header/>
    <GotoTop scrollStepInPx = '50' delayInMs = '30' />
    <div>
      <Router/>
    </div>
    <Footer/> 
    </>
  )
}
