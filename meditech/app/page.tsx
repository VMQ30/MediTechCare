import { Reveal } from "./components/Reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import hero from "@/public/hero-section.jpg";

export default function Home() {
  return (
    <main>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-15 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal delay={0}>
          <p className="font-body uppercase text-[12px] tracking-[0.15rem] font-medium text-secondary-foreground">
            Hospital Management &amp; Patient Portal
          </p>
          <h1 className="mt-5 text-balance text-foreground font-header text-[2.6rem] font-medium leading-[1.04] tracking-wide sm:text-6xl lg:text-[5rem]">
            <span className="italic text-primary-deep">Your</span> Health,{" "}
            <span className="italic text-primary-deep">Your </span>
            Schedule, <span className="italic text-primary-deep">
              Your
            </span>{" "}
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
      </div>
    </main>
  );
}
