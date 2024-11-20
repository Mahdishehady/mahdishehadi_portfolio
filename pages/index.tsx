import DefaultLayout from '../components/layouts/DefaultLayout';
import SectionHeading from '../components/common/SectionHeading';
import {getAllPostSnippets, getAllProjectSnippets, sortByPublishedAt} from '../lib/blog';
import {ProjectSnippet as ProjectSnippetType} from '../lib/types';
import ProjectSnippet from '../components/portfolio/ProjectSnippet';
import Link from 'next/link';
import Head from 'next/head';

import React from 'react';
import Image from 'next/image'
import { getPublicBrand } from '../lib/utils';
import SkillBar from '../components/charts/SkillBar';
import SkillCircle from '../components/charts/SkillCircle';
import Script from 'next/script';

export type Props = {
    snippets: ProjectSnippetType[];
}

export default function Index({snippets}: Props) {
    return (
        <DefaultLayout mainClass="p-6 md:p-10 mt-10 pb-0" footerClass="mx-10">
            <Head>
                <title>{`Portfolio - ${getPublicBrand()}`}</title>
                
            </Head>

            <section className="relative bottom-5 flex py-[76px] bg-primary-400 bg-opacity-50 items-start">
                <div className="z-3 absolute bottom-6 right-6  min-h-full w-full bg-primary-500"></div>
                
                <Image src="/images/home-bg.jpg" alt="Learn more call to action" layout="fill"  objectFit="cover"/>

                <div className="min-h-full top-0 bg-primary-400 bg-opacity-50 absolute w-full" ></div>
                <div className=" z-2 px-10 top-2 w-full relative drop-shadow-md">
                    <h1 className="text-2xl md:text-4xl text-white font-semibold">
                        {/* Amazing Websites With Next.Js */}
                    </h1>
                    <div className="text-white text-xl my-2">
                        &lt;<span className="text-secondary-100">
                        code
                        </span>&gt;
                        <Link href="/portfolio" passHref={true}>
                            <a className="text-white hover:text-secondary-100">
                                Full-Stack developer ,check out my best work...</a>
                        </Link>
                        &lt;/<span className="text-secondary-100">
                            code
                            </span>&gt;
                        </div>

                </div>
            </section>

            <section className="flex flex-col md:flex-row justify-center items-start md:justify-between flex-wrap">
                <div className="flex justify-center items-center">
                    <span className="text-secondary-100 font-bold text-2xl">7</span>
                    <span className="text-white ml-4">Completed Projects</span>
                </div>
                <div className="flex justify-center items-center">
                    <span className="text-secondary-100 font-bold text-2xl">1</span>
                    <span className="text-white ml-4">InternShip</span>
                </div>
                <div className="flex justify-center items-center">
                    <span className="text-secondary-100 font-bold text-2xl">15</span>
                    <span className="text-white ml-4">repositories</span>
                </div>
                <div className="flex justify-center items-center">
                    <span className="text-secondary-100 font-bold text-2xl">1+</span>
                    <span className="text-white ml-4">Years Of Experience</span>
                </div>
            </section>




          <SectionHeading as="h1" className="text-4xl my-5 flex justify-center">Projects</SectionHeading>
            <div className="flex flex-col md:flex-row  flex-wrap justify-between">
                {snippets.map(project => <ProjectSnippet key={project.slug} {...project} className=" w-full md:w-[49.3%] mb-4" />)}
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="basis-1/2">
                    <SectionHeading>Coding Skills</SectionHeading>
                    <div className="text-white shadow-lg bg-primary-400 p-5 py-8">
                        <SkillBar progress={91} label="TypeScript:" />
                        <SkillBar progress={85} label="JavaScript:" className="my-5" />
                        <SkillBar progress={70} label="CSS" />
                        <SkillBar progress={89} label="HTML" className="my-5" />
                        <SkillBar progress={78} label="SQL" />
                    </div>
                </div>
                <div className="basis-1/2 ml-2">
                    <SectionHeading>Technologies</SectionHeading>
                    <div className="text-white shadow-lg bg-primary-400 p-5 py-8 flex flex-wrap justify-between">
                    <SkillCircle progress={70} label="Angular" className="basis-1/2 lg:basis-1/4 mb-5 xl:mb-0" />

                        <SkillCircle progress={70} label="Next.Js" className="basis-1/2 lg:basis-1/4 mb-5 xl:mb-0" />
                        <SkillCircle progress={70} label="Spring Boot" className="basis-1/2 lg:basis-1/4" />
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
        </DefaultLayout>
    );
}

export const getStaticProps = async () => {
    const snippets = await getAllProjectSnippets();
    return {props: {snippets: snippets}}
}