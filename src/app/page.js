import HeroSlider from '@/components/header/HeroSlider'
import AboutSection from '@/components/home/aboutSection/AboutSection'
import FeaturedCars from '@/components/home/featuredCars/FeaturedCars'
import PopularBrands from '@/components/home/popularBrands/PopularBrands'
import Services from '@/components/home/services/Services'
import Testimonials from '@/components/home/testimonials/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <Services/>
      <FeaturedCars />
      <PopularBrands />
      <Testimonials />
    </>
  )
}
