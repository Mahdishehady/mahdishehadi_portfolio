import DefaultLayout from '../components/layouts/DefaultLayout';
import SectionHeading from '../components/common/SectionHeading';
import Link from 'next/link';
import DefaultLink from '../components/navs/Link';
import {AtSign, Mail, User} from '../components/icons';
import Head from 'next/head';
import {getPublicBrand} from '../lib/utils';
import React from 'react';

export default function Contact() {
    return(
        <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0" footerClass="mx-10">
            <Head>
                <title>{`Contact - ${getPublicBrand()}`}</title>
            </Head>
            <section>
                <SectionHeading>Contact Information</SectionHeading>
                <div className="flex flex-wrap flex-col md:flex-row justify-between">
                    <div className="text-white shadow-lg bg-primary-400 p-5 py-8 flex-1">
                        <div className="flex justify-between">
                            <span className="text-white">Country:</span>
                            <span className="text-white text-opacity-70">Lebanon</span>
                        </div>
                        <div className="flex justify-between my-3">
                            <span className="text-white">City:</span>
                            <span className="text-white text-opacity-70">Beirut</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white">-:</span>
                            <span className="text-white text-opacity-70">-</span>
                        </div>
                    </div>

                    <div className="shadow-lg bg-primary-400 p-5 py-8 flex-1 my-3 md:my-0 md:mx-3">
                        <div className="flex justify-between">
                            <span className="text-white">Email:</span>
                            <DefaultLink href="mailto:aaron@example.com" className="text-white text-opacity-70 hover:text-secondary-100 transition-colors">mahdishehadi52@gmail.com</DefaultLink>
                        </div>
                        <div className="flex justify-between my-3">
                            <span className="text-white">Twitter:</span>
                            <DefaultLink href="#" className="text-white text-opacity-70 hover:text-secondary-100 transition-colors">@Mahdi</DefaultLink>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white">LinkedIn:</span>
                            <DefaultLink target='true'  href="https://www.linkedin.com/in/mahdi-shehadi-6a66a724b/" className="text-white text-opacity-70 hover:text-secondary-100 transition-colors">Linkedin/Mahdi</DefaultLink>
                        </div>
                    </div>

                    <div className="shadow-lg bg-primary-400 p-5 py-8 flex-1 md:mx-3">
                        <div className="flex justify-between">
                            <span className="text-white">Phone:</span>
                            <DefaultLink href="tel:+96181304012" className="text-white text-opacity-70 hover:text-secondary-100 transition-colors">+96181304012</DefaultLink>
                        </div>
                        <div className="flex justify-between my-3">
                            <span className="text-white">Github:</span>
                            <DefaultLink href="https://github.com/Mahdishehady" className="text-white text-opacity-70 hover:text-secondary-100 transition-colors">@Mahdishehady</DefaultLink>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white">Emergency:</span>
                            <DefaultLink href="#" className="text-white text-opacity-70 hover:text-secondary-100 transition-colors">shehadi2000@gmail.com</DefaultLink>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionHeading>Get In Touch</SectionHeading>
                <div className="bg-primary-400 shadow-lg px-5 py-10">
                    <form>
                        <div className="flex">
                            <label htmlFor="subject" aria-hidden={true} className="hidden">Name</label>
                            <input type="text" name="name" className="flex-1 p-2 text-white bg-primary-500 autofill:bg-yellow-200 peer order-2 focus:outline-0" />
                            <User className="contact-icon peer-focus:contact-icon-focus order-1 transition-colors duration-500" />

                        </div>
                        <div className="flex my-5">
                            <label htmlFor="email" aria-hidden={true} className="hidden">Email</label>
                            <input type="text" name="email" className="flex-1 text-white p-2 bg-primary-500 autofill:bg-yellow-200 peer order-2 focus:outline-0" />
                            <AtSign className="contact-icon peer-focus:contact-icon-focus order-1 transition-colors duration-500" />
                        </div>
                        <div className="flex">
                            <label htmlFor="message" aria-hidden={true} className="hidden">Message</label>
                            <textarea name="message" className="flex-1 p-2 text-white bg-primary-500  peer order-2 focus:outline-0" rows={10} />
                            <Mail className="contact-icon peer-focus:contact-icon-focus order-1 transition-colors duration-500" />
                        </div>

                        <button type="submit" className="text-white bg-secondary-100 px-6 py-2 mt-6">Send Message</button>
                    </form>
                </div>
            </section>
        </DefaultLayout>
    );
}