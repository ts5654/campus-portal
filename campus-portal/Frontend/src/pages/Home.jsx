import { Navbar } from "../Layout/Header"
import { HeroSection } from '../Components/HeroSection'
import { Features } from '../Components/Features'
import { Events } from '../Components/Event'
import { Campus } from '../Components/Campuslife'

import { Testimonials } from '../Components/Testimonials'
import { Ourimpact } from '../Components/OurImpact'
import { Frequently } from "../Components/Frequently"
import { Footer } from "../Components/Footer"
export const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Features></Features>
            <Events></Events>
            <Campus></Campus>
           
            <Testimonials></Testimonials>
            <Ourimpact></Ourimpact>
            <Frequently></Frequently>
            <Footer></Footer>
        </div>
    )
}