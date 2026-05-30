import { ArrowRight } from "lucide-react"

const Newsletter = () => {
    return (
        <div className="border-b border-[#1e2e1e]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-white text-xl font-bold mb-1" >
                        Stay in the Loop
                    </h3>
                    <p className="text-[#64748b] text-sm">
                        Get tech insights, project tips, and updates from Dechuckify straight to your inbox.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row w-full md:w-auto gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full md:w-72 bg-purple-200 border border-purple-300 shadow-sm focus:border-purple-300/60 rounded-xl px-4 py-3 text-black text-sm outline-none placeholder-[#3a5a3a] transition-colors"
                    />

                    <button className="group w-full md:w-auto flex items-center justify-center gap-1.5 px-5 py-3 bg-purple-300 border border-black/100 hover:bg-black/85 hover:border-purple-950 hover:shadow-indigo-950 hover:text-white hover:shadow-lg font-bold text-sm rounded-xl transition-colors duration-200 whitespace-nowrap">
                        Subscribe
                        <ArrowRight
                            size={15}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter