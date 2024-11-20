import Image from 'next/image'
import Link from 'next/link';
import { links, priceTables, services, testimonials } from '../lib/constants';
import React from 'react';
import PriceTable from '../components/common/PriceTable';
import Snippet from '../components/common/Snippet';
import Testimonial from '../components/common/Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DefaultLayout from '../components/layouts/DefaultLayout';
import SectionHeading from '../components/common/SectionHeading';
import ProgressBar from '../components/charts/ProgressBar';
import SkillBar from '../components/charts/SkillBar';
import ProgressCircle from '../components/charts/ProgressCircle';
import SkillCircle from '../components/charts/SkillCircle';
import { formatDate, getCategorySlug, getPublicBrand } from '../lib/utils';
import DefaultLink from '../components/navs/Link';
import Head from 'next/head';

export default function About() {
    return (
        <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0" footerClass="mx-10">
            <Head>
                <title>{`About - ${getPublicBrand()}`}</title>
            </Head>
            <article>
                <div className="flex justify-between items-center">
                    <SectionHeading as='h1' className="text-3xl mt-5 mb-5 w-[80%]">Let Me Introduce Myself</SectionHeading>
                </div>
                <div className="relative h-[35vh]  md:h-[70vh]">
                    <Image src="/images/mohamed-nohassi-odxB5oIG_iA-unsplash.png" alt="Cool sunset at the beach" layout="fill" objectFit="cover" />
                </div>

                <SectionHeading>Short Bio</SectionHeading>
                <div className="prose prose-invert max-w-full m-0 prose-li:marker:text-secondary-100 prose-a:text-secondary-100 prose-a:no-underline hover:prose-a:text-secondary-50 prose-a:transition-colors prose-a:duration-300  prose-blockquote:border-l-secondary-100 text-white opacity-70 bg-primary-400 p-5 mt-5">
                    <p> Passionate about turning ideas into code, I recently graduated with a degree in computer science and am excited to embark on my journey as a full-stack developer. My goal is to leverage my technical skills, creativity, and problem-solving mindset to make a meaningful impact in the world of web development.

Web Development Enthusiast: With a strong foundation in HTML, CSS, and typescript (JavaScript), I'm eager to dive deep into the world of full-stack development. I've already begun exploring front-end frameworks like [Reactjs, Angular] and back-end technologies such as [ Spring Boot,Nextjs].</p>

                    
                  
                   
                </div>
                <div className="bg-primary-400 p-5 text-white" />
            </article>
            <div className="flex flex-col lg:flex-row">
                <div className="basis-1/2">
                    <SectionHeading>Coding Skills</SectionHeading>
                    <div className="text-white shadow-lg bg-primary-400 p-5 py-8">
                        <SkillBar progress={80} label="TypeScript:" />
                        <SkillBar progress={80} label="JAVA" className="my-5" />
                        <SkillBar progress={70} label="CSS" />
                        <SkillBar progress={89} label="HTML" className="my-5" />
                        <SkillBar progress={78} label="SQL" />
                    </div>
                </div>
                <div className="basis-1/2 ml-2">
                    <SectionHeading>Technologies</SectionHeading>
                    <div className="text-white shadow-lg bg-primary-400 p-5 py-8 flex flex-wrap justify-between">
                    <SkillCircle progress={70} label="Angular" className="basis-1/2 lg:basis-1/4" />

                        <SkillCircle progress={70} label="Next.Js" className="basis-1/2 lg:basis-1/4 mb-5 xl:mb-0" />
                        <SkillCircle progress={70} label="Spring" className="basis-1/2 lg:basis-1/4" />
                        <SkillCircle progress={70} label="React.Js" className="basis-1/2 lg:basis-1/4" />
                    </div>
                    <div className="mt-2 text-white shadow-lg bg-primary-400 p-5 py-9 flex flex-wrap  justify-between">
                        <SkillCircle progress={70} label="Tailwind" className="basis-1/2 lg:basis-1/4" />
                        <SkillCircle progress={70} label="Mongo DB" className="basis-1/2 lg:basis-1/4" />
                        <SkillCircle progress={70} label="MySQL" className="basis-1/2 lg:basis-1/4" />
                        <SkillCircle progress={70} label="Postgress" className="basis-1/2 lg:basis-1/4" />

                    </div>
                </div>
            </div>
            <section>
                <SectionHeading className="mt-10">
                    {/* Recommendations */}
                </SectionHeading>
                <Swiper
                    modules={[Pagination, A11y]}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    speed={1500}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {testimonials.map(testimonial =>
                        <SwiperSlide key={testimonial.name}>
                            <div className="py-[23px]"><Testimonial {...testimonial} /></div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </section>
        </DefaultLayout>
    )
}
