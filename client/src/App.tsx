import About from "./sections/About"
import Brands from "./sections/Brands"
import Contact from "./sections/Contact"
import CTA from "./sections/Cta"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Services from "./sections/Services"
import Testimonials from "./sections/Testimonial"
import WhyChooseUs from "./sections/WhyChooseUs"



const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Brands />
      <Testimonials />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App