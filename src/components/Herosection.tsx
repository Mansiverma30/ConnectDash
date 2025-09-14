import React from "react";
import { Link } from "react-router-dom";
import img from "../images/analysis1.png";
import {
    Search,
    Globe,
    SlidersHorizontal,
    Filter,
    Lock,
    Rocket
} from "lucide-react";

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-500"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Herosection: React.FC = () => {
    const cardData = [
        { icon: <Search />, title: "Advanced Analytics", desc: "Gain deep insights into your social media performance with detailed analytics and reporting." },
        { icon: <Globe />, title: "Real-Time Alerts", desc: "Receive instant notifications for important events and trends, keeping you ahead of the curve." },
        { icon: <SlidersHorizontal />, title: "Customizable Dashboards", desc: "Tailor your dashboards to focus on the metrics that matter most to your business." },
        { icon: <Filter />, title: "Smart Filtering", desc: "Easily filter and segment your data to uncover specific insights and patterns." },
        { icon: <Lock />, title: "Secure Data Handling", desc: "Your data is protected with robust security measures and privacy protocols." },
        { icon: <Rocket />, title: "Fast Processing", desc: "Experience lightning-fast data processing and analysis, providing you with timely information." }
    ];

    const testimonials = [
        {
            name: "Sarah Chen",
            title: "Marketing Manager",
            feedback:
                "ConnectDash has revolutionized our social media strategy. The insights are incredibly valuable, and the platform is easy to use.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            stars: 4,
        },
        {
            name: "David Lee",
            title: "Social Media Specialist",
            feedback:
                "I love the real-time alerts! They help me stay on top of trends and engage with my audience effectively.",
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            stars: 5,
        },
        {
            name: "Emily Wong",
            title: "Business Owner",
            feedback:
                "The customizable dashboards allow me to focus on the metrics that matter most to my business. Highly recommended.",
            avatar: "https://randomuser.me/api/portraits/women/47.jpg",
            stars: 5,
        },
    ];

    return (
        <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 mt-10 px-6 sm:px-10 bg-white">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <h1 className="text-[#1c1917] text-4xl md:text-5xl font-black leading-tight">
                                ConnectDash
                            </h1>
                            <p className="text-stone-600 text-lg md:text-xl">
                                Get a comprehensive view of your social media presence with
                                detailed insights and real-time data.
                            </p>
                            <Link to="/get-started">
                                <button className="rounded-lg h-12 px-8 bg-[#ea580c] text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                        <div
                            className="w-full h-full bg-center bg-no-repeat aspect-video max-h-[400px] sm:max-h-[500px] bg-cover rounded-2xl hover:scale-105 transition-transform duration-300 shadow-2xl"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    </div>
                </section>

                {/* Features */}
                <section className="py-24 px-6 sm:px-10 bg-[#fff7ed]">
                    <div className="mx-auto max-w-7xl text-center mb-16">
                        <h2 className="text-[#1c1917] text-4xl md:text-5xl font-black">
                            Core Features
                        </h2>
                        <p className="text-stone-600 text-lg mt-4 max-w-2xl mx-auto">
                            Discover the powerful tools that will elevate your social media game.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 rounded-xl border border-orange-100 bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <div className="flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-[#db2777] to-[#ea580c] text-white">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-[#1c1917] text-xl font-bold">{card.title}</h3>
                                    <p className="text-stone-600 text-base">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-24 px-6 sm:px-10 bg-white">
                    <div className="mx-auto max-w-7xl text-center mb-16">
                        <h2 className="text-[#1c1917] text-4xl md:text-5xl font-black">
                            What Our Customers Say
                        </h2>
                        <p className="text-stone-600 text-lg mt-4 max-w-2xl mx-auto">
                            Join thousands of happy customers who are growing their brands with ConnectDash.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => (
                            <div key={index} className="flex flex-col gap-6 rounded-xl bg-[#fff7ed] p-8 border border-orange-100">
                                <div className="flex items-center">
                                    <img
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        src={t.avatar}
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-[#1c1917] text-lg font-bold">{t.name}</h4>
                                        <p className="text-stone-600 text-sm">{t.title}</p>
                                    </div>
                                </div>
                                <div className="flex text-[#ea580c]">
                                    {Array.from({ length: t.stars }, (_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </div>
                                <p className="text-stone-700 text-base leading-relaxed">
                                    {t.feedback}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* By the Numbers */}
                <section className="py-24 px-6 sm:px-10 bg-[#fff7ed]">
                    <div className="mx-auto max-w-7xl text-center mb-16">
                        <h2 className="text-[#1c1917] text-4xl md:text-5xl font-black">
                            By the Numbers
                        </h2>
                        <p className="text-stone-600 text-lg mt-4 max-w-2xl mx-auto">
                            Our platform's impact speaks for itself. Check out the stats.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        {[
                            { value: "1M+", label: "Accounts Analyzed" },
                            { value: "50M+", label: "Insights Generated" },
                            { value: "98%", label: "Customer Satisfaction" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-8 bg-white shadow-lg border border-orange-100"
                            >
                                <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#db2777] to-[#ea580c]">
                                    {stat.value}
                                </p>
                                <p className="text-stone-600 text-lg mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6 sm:px-10 bg-white">
                    <div className="mx-auto max-w-4xl text-center bg-gradient-to-br from-[#ea580c] via-[#db2777] to-[#10b981] rounded-2xl p-16 shadow-2xl">
                        <h2 className="text-white text-4xl md:text-5xl font-black">
                            Ready to Transform Your Social Media Strategy?
                        </h2>
                        <p className="text-orange-100 text-lg mt-6 max-w-2xl mx-auto">
                            Don't wait. Take control of your social media presence today and start seeing results.
                        </p>
                        <div className="mt-10">
                            <Link to="/get-started">
                                <button className="rounded-lg h-14 px-10 bg-white text-[#ea580c] text-xl font-bold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                    <p className="text-sm text-red-600 text-center p-4">
                        Disclaimer: This page is based on mock data and is not reflective of real users or accounts.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Herosection;
