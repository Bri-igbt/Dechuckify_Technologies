import { motion } from "framer-motion"
import AnimatedBackground from "../component/AnimatedBackground"
import Navbar from "../component/Navbar"
import HeroSection from "../component/HeroSection"
import MarqueeTicker from "../component/MarqueeTicker"


const Home = () => {
    return (
        <motion.div
        className="relative min-h-screen w-full overflow-hidden bg-[#0f0640]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <AnimatedBackground />
            <Navbar />
            <HeroSection />
            <MarqueeTicker />
        </motion.div>
    )
}

export default Home