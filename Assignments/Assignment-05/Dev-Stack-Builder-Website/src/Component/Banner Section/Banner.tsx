
import bannerImg from "../../assets/banner-stack.png";

const Banner = () => {
    return (
        <section>
            <div className="container mx-auto px-5 py-8 sm:px-4 sm:py-10 lg:px-6 lg:py-15">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                        {/* Heading */}
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl ">
                            Build Your Ideal{" "}
                            <span className="bg-linear-to-r from-red-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
                            Explore frontend, backend, databases, and developer tools.
                            Compare technologies, discover new possibilities, and build
                            the perfect stack for your next project.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                            <a
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-red-600 to-purple-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                Explore Technologies
                            </a>

                            <a
                                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="mx-auto w-full max-w-lg lg:max-w-none">

                        {/* Image Container */}
                        <div className="rounded-3xl p-5 sm:p-8">
                            <img
                                src={bannerImg}
                                alt="Illustration of a modern development technology stack"
                                className="mx-auto h-auto w-full object-contain transition duration-500 hover:scale-105"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
