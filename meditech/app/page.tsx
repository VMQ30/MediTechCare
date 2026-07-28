"use client";

import { Reveal } from "./components/Reveal";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  LayoutDashboard,
  MessagesSquare,
  Users,
} from "lucide-react";
import Image from "next/image";
import hero from "@/public/hero-section.jpg";
import doctor from "@/public/doctor.jpg";
import tablet from "@/public/tablet.jpg";
import { useState } from "react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 "
    >
      <Reveal delay={0}>
        <p className="font-body uppercase text-[12px] tracking-[0.2rem] font-medium text-secondary-foreground">
          Hospital Management &amp; Patient Portal
        </p>
        <h1 className="mt-5 text-balance text-foreground font-header text-[2.6rem] font-medium leading-[1.04] tracking-wide sm:text-6xl lg:text-[4.5rem]">
          <span className="italic text-primary-deep">Your</span> Health,{" "}
          <span className="italic text-primary-deep">Your </span>
          Schedule, <span className="italic text-primary-deep">Your</span>{" "}
          Choice.
        </h1>
        <p className="mt-6  max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Skip the waiting room hassle. Connect with doctors, schedule virtual
          consultations, and manage your health journey here
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button className="group uppercase font-body bg-primary-deep inline-flex items-center justify-center gap-2 rounded-[3px] border px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lift hover:brightness-120">
            Book an appointment
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className="text-primary-deep font-body uppercase bg-background border border-ring rounded-[3px] px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-primary-soft">
            Explore the platform
          </button>
        </div>
      </Reveal>

      <Reveal delay={120} className="lg:pb-2">
        <div className="relative mx-auto aspect-[5/6] w-full max-w-lg">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[92%] rounded-t-[999px] bg-secondary"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -right-3 top-10 hidden h-24 w-24 rounded-full border border-ring/25 sm:block"
          ></div>
          <div className="absolute inset-x-4 bottom-0 top-6 overflow-hidden rounded-t-[999px] rounded-b-sm border border-border bg-card shadow-[0_20px_60px_-20px_rgb(15_23_20_/_0.25)]">
            <Image
              src={hero}
              alt="Healthcare professional"
              width={1200}
              height={1400}
              className="h-full w-full object-cover object-left"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="mt-30 py-20 border-t border-border border-t-[2px]"
    >
      <Reveal delay={0} className=" grid gap-4 lg:grid-cols-[2fr_1fr]">
        <figure className="overflow-hidden rounded-sm bg-secondary">
          <Image
            src={doctor}
            alt="A doctor reviewing patient information on a tablet during a consultation"
            width="1408"
            height="1008"
            className="h-64 w-full object-cover sm:h-[26rem] lg:h-[30rem]"
          />
        </figure>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <figure className="overflow-hidden rounded-sm bg-secondary">
            <Image
              src={tablet}
              alt="Patient viewing an appointment schedule on a tablet"
              loading="lazy"
              width="1008"
              height="1008"
              className="h-48 w-full object-cover lg:h-[15.5rem]"
            />
          </figure>
          <div className="flex flex-col justify-between rounded-sm bg-primary-soft p-8 text-justify lg:h-[13.25rem]">
            <p className="text-sm font-body leading-relaxed text-secondary-foreground">
              To empower patients with simple, secure, and responsive digital
              tools, transforming how you connect with specialists and manage
              your health.
            </p>
            <p className="mt-6 font-body uppercase text-[12px] tracking-[0.2rem] font-medium text-secondary-foreground">
              Our Mission
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-15">
          <div className="">
            <p className="font-body uppercase text-[12px] tracking-[0.2rem] font-medium text-secondary-foreground">
              About MediTech Care
            </p>
            <h1 className="mt-5 text-balance text-foreground font-header text-[2.6rem] font-medium leading-[1.04] tracking-wide sm:text-6xl lg:text-[4.5rem]">
              Your health,{" "}
              <span className="text-primary-deep italic">Simplified</span>
            </h1>
            <p className="mt-6 max-w-[90%] font-body text-base leading-relaxed text-muted-foreground">
              At MediTech Care, our goal is to bridge the gap between patients
              and healthcare. We aim to eliminate long wait times and complex
              scheduling by providing a platform where patients can book
              appointments, consult with specialists, and securely manage their
              medical records anytime, anywhere.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Services() {
  const FEATS = [
    {
      name: "Dashboard",
      icon: (
        <LayoutDashboard
          className="size-6 text-sage-deep"
          strokeWidth={1.4}
          aria-hidden="true"
        />
      ),
      desc: "Provides an overview of appointments, patient records, and recent transactions.",
    },
    {
      name: "Patient Management",
      icon: (
        <Users
          className="size-6 text-sage-deep"
          strokeWidth={1.4}
          aria-hidden="true"
        />
      ),
      desc: "Allows staff to add, update, and view patient records.",
    },
    {
      name: "Appointment Scheduling",
      icon: (
        <CalendarDays
          className="size-6 text-sage-deep"
          strokeWidth={1.4}
          aria-hidden="true"
        />
      ),
      desc: "A structured calendar-based system to manage doctor-patient schedules.",
    },
    {
      name: "Telemedicine",
      icon: (
        <MessagesSquare
          className="size-6 text-sage-deep"
          strokeWidth={1.4}
          aria-hidden="true"
        />
      ),
      desc: "Facilitates remote virtual consultations through secure direct messaging between patients and healthcare providers.",
    },
  ];
  return (
    <section
      id="services"
      className="mt-10 py-20 border-t border-border border-t-[2px]"
    >
      <Reveal delay={0}>
        <p className="font-body uppercase text-[12px] tracking-[0.2rem] font-medium text-secondary-foreground">
          Our Core Services
        </p>

        <h1 className="mt-5 text-balance text-foreground font-header text-[2.6rem] font-medium leading-[1.04] tracking-wide sm:text-6xl lg:text-[4.5rem]">
          How We Serve Your{" "}
          <span className="text-primary-deep">Health Needs</span>
        </h1>
        <p className="mt-5 font-body text-base leading-relaxed text-muted-foreground lg:max-w-[90%]">
          Hospitals are among the most industrious and demanding institutions,
          and many operate on obsolete infrastructure that is costly to repair
          and maintain. Our goal is a user-friendly, streamlined system focused
          on simple yet clear, detailed, and organized data visualization.
        </p>
      </Reveal>

      <Reveal className="mt-12 grid gap-px overflow-hidden rounded-sm bg-rule sm:grid-cols-2">
        {FEATS.map((feat) => {
          return (
            <div
              key={feat.name}
              className="text-primary group bg-white p-7 transition-colors duration-300 hover:bg-primary-soft sm:p-9"
            >
              {feat.icon}
              <h3 className="text-primary-deep mt-6 font-display text-xl font-medium">
                {feat.name}
              </h3>
              <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book an appointment on MediTech Care?",
      answer:
        "You can easily book an appointment by creating an account, selecting your preferred specialist, and choosing an available time slot from their schedule.",
    },
    {
      question: "Is my medical data secure?",
      answer:
        "Yes, all patient medical data is encrypted and stored in full compliance with healthcare privacy and security standards.",
    },
    {
      question: "Can I consult a doctor remotely?",
      answer:
        "Yes, MediTech Care offers telemedicine capabilities so you can communicate securely with specialists from anywhere.",
    },
    {
      question: "Who can access my patient records?",
      answer:
        "Only authorized healthcare professionals involved in your direct care and treatment have access to your health records.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="scroll-mt-20 py-20 border-t border-border border-t-[2px] sm:py-28"
    >
      <Reveal delay={0}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-5 text-balance text-primary-deep font-header text-[2.6rem] font-medium leading-[1.04] tracking-wide sm:text-6xl lg:text-[3rem]">
            Frequently Asked Questions
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground mt-5 font-body ">
            Clear answers about booking, security, and how MediTech Care works.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <div className="font-body mx-auto max-w-4xl rounded-2xl border border-border bg-card p-2 sm:p-4">
          <div className="w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-border last:border-b-0"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between px-4 py-4 text-left font-display text-base font-medium transition-all hover:no-underline cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg-py:15">
      <HeroSection />
      <About />
      <Services />
      <FAQ />
    </main>
  );
}
