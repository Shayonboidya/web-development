import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bannerImg from '@/assets/banner.png';
const Banner = () => {
    return (

        <section className="m-3 rounded-2xl bg-slate-800 px-4 py-8 shadow-2xl sm:m-5 sm:rounded-3xl sm:px-6 sm:py-12 md:m-6 md:px-8 lg:m-10 lg:px-10 lg:py-16 xl:px-12 xl:py-20">

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

                {/* Left Content */}
                <div className="z-10 flex flex-col items-start">

                    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-green-400 sm:text-sm">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="mb-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                        TRAIN WITH INTENT.
                        <span className="mt-1 block text-green-400">
                            LOG EVERY SET.
                        </span>
                    </h1>

                    <p className="mb-8 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                        FitLog is a dark, no-nonsense gym companion. Pick a lift,
                        lock it into today&apos;s plan, and watch your weekly progress
                        add up. Stay consistent, track your performance, and
                        become stronger every day.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">

                        <Link
                            href="#library"
                            className="btn min-h-12 flex-1 rounded-xl border-none bg-[#C2F800] px-6 text-sm font-bold text-black shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/30 sm:flex-none sm:px-8"
                        >
                            BROWSE WORKOUTS
                        </Link>

                    </div>
                </div>

                {/* Right Image */}
                <div className="mx-auto w-full max-w-xl lg:max-w-none">

                    {/* Background Glow */}

                    <div className="p-2 sm:p-3">

                        <Image
                            src={bannerImg}
                            alt="Fitness workout and training"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="h-64 w-full rounded-xl  sm:h-80 md:h-96 lg:h-[420px]"
                        />

                    </div>

                </div>

            </div>
        </section>

    );
};

export default Banner;