import Banner from '@/components/Banner'
import Discount from '@/components/Discount'
import Feapro from '@/components/Feapro'
import Leapro from '@/components/Leapro'
import Shopex from '@/components/Shopex'
import Trendpro from '@/components/Trendpro'
import Unique from '@/components/Unique'
import React from 'react'

const page = () => {
  return (
    <>
      <Banner />
      <Feapro />
      <Leapro/>
      <Shopex/>
      <Unique/>
      <Trendpro/>
      <Discount/>
    </>
  )
}

export default page