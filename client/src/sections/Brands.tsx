import { brands } from "../utils/data";


const duplicated = [...brands, ...brands];

const  Brands = () => {
    return (
        <section className="w-full bg-black/90 py-20 px-6 overflow-hidden">
            <div className="text-center mb-14 flex flex-col items-center gap-4">
                <span className="px-5 py-1.5 rounded-full border border-purple-950 text-white/75 text-sm font-medium" >
                    Trusted Partnerships
                </span>

                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold" >
                    Brands That{" "}
                    <span className="text-purple-500">Trust Us</span>
                </h2>

                <p className="text-white/75 text-sm md:text-base max-w-xl leading-relaxed" >
                    We’ve proudly collaborated with amazing businesses across various industries, 
                    helping startups and established enterprises achieve success through innovative digital solutions.
                </p>
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#0b1a12] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#0b1a12] to-transparent pointer-events-none" />

                <div className="flex gap-4 animate-marquee w-max">
                {duplicated.map((brand, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[160px] h-[90px] md:w-[200px] md:h-[100px] rounded-xl flex items-center justify-center cursor-pointer bg-purple-200/95 border border-purple-950 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                        >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-auto h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}


export default Brands;