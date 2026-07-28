import { Reveal } from "./components/Reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import hero from "@/public/hero-section.jpg";
import doctor from "@/public/doctor.jpg";
import tablet from "@/public/tablet.jpg";

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
        <h1 className="mt-5 text-balance text-foreground font-header text-[2.6rem] font-medium leading-[1.04] tracking-wide sm:text-6xl lg:text-[5rem]">
          <span className="italic text-primary-deep">Your</span> Health,{" "}
          <span className="italic text-primary-deep">Your </span>
          Schedule, <span className="italic text-primary-deep">Your</span>{" "}
          Choice.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Skip the waiting room hassle. Connect with doctors, schedule virtual
          consultations, and manage your health journey here
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button className="group bg-primary-deep inline-flex items-center justify-center gap-2 rounded-[3px] border px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lift hover:brightness-120">
            Book an appointment
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className="text-primary-deep bg-background border border-ring rounded-[3px] px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-primary-soft">
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
      <Reveal delay={80} className=" grid gap-4 lg:grid-cols-[2fr_1fr]">
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
            <p className="text-sm leading-relaxed text-secondary-foreground">
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
        <div className="mt-15 grid grid-cols-1 lg:grid-cols-[3fr_1fr]">
          <div className="">
            <p className="font-body uppercase text-[12px] tracking-[0.2rem] font-medium text-secondary-foreground">
              About MediTech Care
            </p>
            <h1 className="mt-5 text-balance text-foreground font-header text-[2.6rem] font-medium leading-[1.04] tracking-wide sm:text-6xl lg:text-[4.5rem]">
              Your health,{" "}
              <span className="text-primary-deep italic">Simplified</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg-py:15">
      <HeroSection />
      <About />
    </main>
  );
}
