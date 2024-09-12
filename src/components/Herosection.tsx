import React from 'react';
import image2 from "../images/Photo.jpg"
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    Typography,
    Avatar,
    CardHeader
} from "@material-tailwind/react";

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const HeroSection: React.FC = () => {
    const cardData = [
        { icon: "🔍", title: "Comprehensive Social Media Analytics" },
        { icon: "🌐", title: "Real-Time Insights and Alerts" },
        { icon: "🛠️", title: "Customizable Dashboards and Reports" },
        { icon: "✅", title: "Advanced Filtering and Search Options" },
        { icon: "🔒", title: "Secure Data Handling and Privacy" },
        { icon: "🚀", title: "Fast Data Processing and Visualization" }
    ];

    const testimonials = [
        {
            name: "User A",
            title: "Social Media Manager",
            feedback:
                "ConnectDash has transformed how we monitor and analyze social media. Highly effective and user-friendly!",
            avatar: "https://robohash.org/atfacilisoptio.png?size=50x50&set=set1",
        },
        {
            name: "User B",
            title: "Marketing Specialist",
            feedback:
                "An invaluable tool for our social media strategy. Fast, accurate, and insightful.",
            avatar: "https://robohash.org/atfacilisoptio.png?size=50x50&set=set1",
        },
    ];

    return (
        <div>
            <section className="text-[#162020] bg-[#F3F4F4] py-10">
                <div className="container max-w-7xl flex flex-col justify-center p-4 sm:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">ConnectDash</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12"> Get a comprehensive view of your social media presence
                            <br className="hidden md:inline lg:hidden" /> with detailed insights and real-time data.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to="/get-started">
                                <button className="bg-gradient-to-r from-slate-500 to-slate-700 text-white py-3 px-6 rounded-full font-semibold hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="items-center justify-center p-6 mt-8 lg:mt-0 h-72 lg:h-96 hidden md:block">
                        <img src={image2} alt="ConnectDash Analytics Visualization" className="object-contain h-72 lg:h-96  transition-transform duration-300 ease-in-out hover:scale-105" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:ml-auto lg:mr-auto lg:max-w-7xl">
                    {cardData.map((card, index) => (
                        <Card key={index} className="lg:w-96 shadow-lg hover:shadow-xl transition-shadow duration-300" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <div className="mb-4 h-12 w-12 text-gray-900 text-4xl">
                                    {card.icon}
                                </div>
                                <Typography variant="h5" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {card.title}
                                </Typography>
                                <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et aliquet justo, vel aliquet odio.
                                </Typography>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <div className="py-12">
                    <Typography variant="h3" color="blue-gray" className="text-center mb-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        What Our Users Say
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:max-w-5xl lg:mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="lg:w-[400px] p-9 shadow-lg hover:shadow-xl transition-shadow duration-300" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <CardHeader className="mx-0 flex items-center gap-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    <Avatar size="lg" variant="circular" src={testimonial.avatar} alt={testimonial.name} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                    <div className="flex w-full flex-col">
                                        <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            {testimonial.name}
                                        </Typography>
                                        <div className="flex items-center gap-0">
                                            {Array(5).fill(<StarIcon />)}
                                        </div>
                                        <Typography color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{testimonial.title}</Typography>
                                    </div>
                                </CardHeader>
                                <CardBody className="mb-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>"{testimonial.feedback}"</Typography>
                                </CardBody>
                            </Card>
                        ))}
                    </div>

                    <div className="mb-12 text-center py-10">
                        <h3 className="text-3xl font-semibold mb-10 text-gray-800">By the Numbers</h3>
                        <div className="flex flex-col items-center gap-8 sm:flex-row justify-center">
                            <div className="relative group bg-gradient-to-br from-gray-100 to-gray-300 shadow-md rounded-lg p-8 w-48 sm:w-60 hover:bg-gradient-to-r hover:from-slate-300  hover:scale-105 transition-all duration-300 ease-in-out">
                                <h4 className="text-5xl font-extrabold text-slate-700  transition-colors duration-300">500+</h4>
                                <p className="mt-4 text-lg text-slate-600 ">Reports Generated</p>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-slate-500 to-slate-700 opacity-0  transition-opacity duration-300 ease-in-out"></div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative group bg-gradient-to-br from-gray-100 to-gray-300 shadow-md rounded-lg p-8 w-48 sm:w-60 hover:bg-gradient-to-r hover:from-slate-300  hover:scale-105 transition-all duration-300 ease-in-out">
                                <h4 className="text-5xl font-extrabold text-slate-700  transition-colors duration-300">1000+</h4>
                                <p className="mt-4 text-lg text-slate-600 ">Active Users</p>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-slate-500 to-slate-700 opacity-0  transition-opacity duration-300 ease-in-out"></div>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg italic text-center mt-6">
                        Revolutionize your social media management <br className="md:inline lg:hidden" />with ConnectDash.
                    </p>
                </div>
                <p className="text-sm text-red-600 text-center p-4">
                    Disclaimer: The information provided in this page is based on mock data and is not reflective of real users or social media accounts.
                </p>
            </section>
        </div>
    );
};

export default HeroSection;