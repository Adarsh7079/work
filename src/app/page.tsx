import FaqSection from '@/components/body/faq-section'
import Hero from '@/components/body/hero-section'
import ServiceCarousel from '@/components/body/service-carousel'
import SiteFooter from '@/components/body/site-footer'
import WhyUsSection from '@/components/body/why-us-section'
import React from 'react'

const page = () => {
  return (
    <div>
     <section id="services" className='mt-10 scroll-mt-32'>
       <Hero/>
     </section>
     <section id="why-us" className='scroll-mt-32'>
       <WhyUsSection />
     </section>
     <section className='scroll-mt-32'>
       <ServiceCarousel />
     </section>
     <section id="faq" className='scroll-mt-32'>
       <FaqSection />
     </section>
     <SiteFooter />
    </div>
  )
}

export default page
