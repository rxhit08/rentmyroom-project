import React from 'react'

import Layout from '../Layout'
import Header from '../HomeComponents/Header'
import Propertytype from '../HomeComponents/Propertytype'
import RecentpropertyListed from '../HomeComponents/RecentpropertyListed'
import Footer from '../HomeComponents/Footer'


function Home() {

  

  return (
    <div>
        <Layout />
        <Header />
        <Propertytype />
        <RecentpropertyListed />
        <Footer />
    </div>
  )
}

export default Home
