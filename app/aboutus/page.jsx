import React from 'react'
import AboutusHero from "@/components/Wicked_Components/AboutUs/aboutus_hero";
import AboutWicked from "@/components/Wicked_Components/AboutUs/AboutWicked";
import WhatWeDo from "@/components/Wicked_Components/AboutUs/WhatWeDo";
import Nevergo from "@/components/Wicked_Components/AboutUs/Nevergo";
import Ceo_message from "@/components/Wicked_Components/AboutUs/Ceo_message";
import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <AboutusHero />
      <AboutWicked/>
      <WhatWeDo/>
      <Ceo_message/>
      <Nevergo/>
      <Footer />


    </div>
  )
}

export default page
