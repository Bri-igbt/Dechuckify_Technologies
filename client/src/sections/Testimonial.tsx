import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "../types";
import { initialTestimonials } from "../utils/data";
import StarRating from "../component/StarRating";
import TestimonialCard from "../component/TestimonialCard";
import TestimonialModal from "../component/TestimonialModal";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [page, setPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const perPage = 3;
    const totalPages = Math.ceil(testimonials.length / perPage);
    const visible = testimonials.slice(page * perPage, page * perPage + perPage);

    const handleAdd = (t: Omit<Testimonial, "id" | "date" | "avatar">) => {
        const avatars = [
            "https://randomuser.me/api/portraits/men/45.jpg",
            "https://randomuser.me/api/portraits/women/33.jpg",
            "https://randomuser.me/api/portraits/men/60.jpg",
            "https://randomuser.me/api/portraits/women/55.jpg",
        ];

        const newT: Testimonial = {
            ...t,
            id: Date.now(),
            date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
            avatar: avatars[Math.floor(Math.random() * avatars.length)],
        };
        setTestimonials((prev) => [newT, ...prev]);
        setPage(0);
    };

    const avgRating = (
        testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length
    ).toFixed(1);

    return (
        <section id="testimonials" className="w-full bg-black/85 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div className="flex flex-col gap-3">
                        <p className="text-purple-500 text-sm font-bold tracking-[0.25em] uppercase" >
                            Testimonials
                        </p>

                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight" >
                            What Our{" "}
                        <span className="text-purple-500">Clients Say</span>
                        </h2>
                        <p className="text-white/75 text-sm md:text-base max-w-lg" >
                            Real words from real clients. We let the quality of our work and the experiences we create speak for themselves.
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-3">
                        <div className="flex items-center gap-3 bg-white border border-[#1e2e1e] rounded-2xl px-5 py-3">
                        <div>
                            <p className="text-purple-500 text-3xl font-extrabold leading-none" >
                                {avgRating}
                            </p>
                            <StarRating rating={Math.round(Number(avgRating))} />
                        </div>

                        <div className="h-10 w-px bg-[#1e2e1e]" />
                            <div>
                                <p className="text-white text-lg font-bold" >
                                    {testimonials.length}
                                </p>

                                <p className="text-[#64748b] text-xs" >
                                    Reviews
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowModal(true)}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-500/20  text-purple-500 text-sm font-semibold hover:bg-[#22c55e]/10 transition-colors duration-200" 
                        >
                            <Star size={15} />
                            Leave a Review
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visible.map((t) => (
                        <TestimonialCard key={t.id} t={t} />
                    ))}
                </div>

                {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                    <button
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                    className="w-10 h-10 rounded-full border border-[#1e2e1e] flex items-center justify-center text-[#64748b] hover:border-white/95 hover:text-purple-950 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    >
                    <ChevronLeft size={18} />
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`transition-all duration-200 rounded-full ${
                                    i === page
                                    ? "w-8 h-3 bg-white/75"
                                    : "w-3 h-3 bg-white/75 hover:bg-white"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                        disabled={page === totalPages - 1}
                        className="w-10 h-10 rounded-full border border-[#1e2e1e] flex items-center justify-center text-[#64748b] hover:border-white hover:text-purple-950 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
                )}
            </div>

            {showModal && (
                <TestimonialModal
                    onClose={() => setShowModal(false)}
                    onSubmit={handleAdd}
                />
            )}
        </section>
    );
}

export default Testimonials;
