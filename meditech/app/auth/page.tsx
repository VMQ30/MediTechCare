"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";

function FormField({
  label,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
  value,
  onChange,
  hint,
}: {
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      <input
        required={required}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-border bg-background px-3.5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary-deep focus:ring-2 focus:ring-ring/40"
      />
      {hint && (
        <p className="mt-1.5 text-xs text-muted-foreground font-body">{hint}</p>
      )}
    </div>
  );
}

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Sign in logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 font-body">
      <FormField
        label="Email address"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormField
        label="Password"
        type="password"
        required
        autoComplete="current-password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="group uppercase font-body bg-primary-deep inline-flex w-full items-center justify-center gap-2 rounded-sm border px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lift hover:brightness-110 cursor-pointer disabled:opacity-60"
      >
        Sign In
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function MedicalCredentialsFields({
  licenseNumber,
  setLicenseNumber,
  specialty,
  setSpecialty,
  issuingBody,
  setIssuingBody,
  notes,
  setNotes,
}: {
  licenseNumber: string;
  setLicenseNumber: (val: string) => void;
  specialty: string;
  setSpecialty: (val: string) => void;
  issuingBody: string;
  setIssuingBody: (val: string) => void;
  notes: string;
  setNotes: (val: string) => void;
}) {
  return (
    <div className="space-y-4 rounded-sm border border-border bg-primary-soft/30 p-4 font-body">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-deep">
        <ShieldCheck className="size-4" aria-hidden="true" strokeWidth={1.5} />
        Medical credentials
      </div>

      <FormField
        label="Medical license number"
        required
        placeholder="e.g., 0123456"
        value={licenseNumber}
        onChange={(e) => setLicenseNumber(e.target.value)}
      />

      <FormField
        label="Specialty"
        required
        placeholder="e.g., Cardiology"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />

      <FormField
        label="Issuing body / licensing board"
        required
        placeholder="e.g., PRC (Philippines)"
        value={issuingBody}
        onChange={(e) => setIssuingBody(e.target.value)}
      />
    </div>
  );
}

function SignUpForm() {
  const [role, setRole] = useState<"patient" | "professional">("patient");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [licenseNumber, setLicenseNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [issuingBody, setIssuingBody] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Sign up logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 font-body">
      <div>
        <label className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          I am signing up as
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setRole("patient")}
            className={`rounded-sm px-3.5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-all cursor-pointer border ${
              role === "patient"
                ? "border-primary-deep bg-primary-soft text-primary-deep"
                : "border-border bg-background text-muted-foreground hover:bg-secondary"
            }`}
          >
            Patient
          </button>
          <button
            type="button"
            onClick={() => setRole("professional")}
            className={`rounded-sm px-3.5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-all cursor-pointer border ${
              role === "professional"
                ? "border-primary-deep bg-primary-soft text-primary-deep"
                : "border-border bg-background text-muted-foreground hover:bg-secondary"
            }`}
          >
            Medical Specialist
          </button>
        </div>
      </div>

      <FormField
        label="Full Name"
        required
        autoComplete="name"
        placeholder="Juan Dela Cruz"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormField
        label="Email address"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormField
        label="Phone (optional)"
        type="tel"
        autoComplete="tel"
        placeholder="+63 912 345 6789"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <FormField
        label="Password"
        type="password"
        required
        autoComplete="new-password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        hint="Min. 8 characters"
      />

      {role === "professional" && (
        <MedicalCredentialsFields
          licenseNumber={licenseNumber}
          setLicenseNumber={setLicenseNumber}
          specialty={specialty}
          setSpecialty={setSpecialty}
          issuingBody={issuingBody}
          setIssuingBody={setIssuingBody}
          notes={notes}
          setNotes={setNotes}
        />
      )}

      <button
        type="submit"
        className="group uppercase font-body bg-primary-deep inline-flex w-full items-center justify-center gap-2 rounded-sm border px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lift hover:brightness-110 cursor-pointer disabled:opacity-60"
      >
        Create Account
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function AuthCardContainer({
  isSignIn,
  setIsSignIn,
}: {
  isSignIn: boolean;
  setIsSignIn: (val: boolean) => void;
}) {
  return (
    <div className="flex-1 w-full">
      <div className="mx-auto w-fullnrounded-sm border border-border bg-card p-6 shadow-sm sm:p-9">
        {/* Mobile Header Logo */}
        <div className="mb-6 flex items-center gap-2 lg:hidden">
          <Link
            href="/"
            className="font-header text-2xl font-bold tracking-tight text-foreground"
          >
            MediTech <span className="text-primary-deep italic">Care</span>
          </Link>
        </div>

        {/* Tab Selection */}
        <div className="mb-6 grid grid-cols-2 gap-1 rounded-sm bg-secondary p-1">
          <button
            type="button"
            onClick={() => setIsSignIn(true)}
            className={`rounded-sm py-2.5 text-xs uppercase font-body font-medium tracking-[0.1em] transition-all cursor-pointer ${
              isSignIn
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => setIsSignIn(false)}
            className={`rounded-sm py-2.5 text-xs uppercase font-body font-medium tracking-[0.1em] transition-all cursor-pointer ${
              !isSignIn
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Create account
          </button>
        </div>

        {/* Active Form */}
        {isSignIn ? <SignInForm /> : <SignUpForm />}

        {/* OAuth Divider */}
        <div className="my-6 flex items-center gap-3 text-xs uppercase font-body tracking-[0.1em] text-muted-foreground">
          <div className="h-px flex-1 bg-border"></div>
          <span>or continue with</span>
          <div className="h-px flex-1 bg-border"></div>
        </div>

        {/* Social Auth */}
        <button
          type="button"
          className="font-body text-xs uppercase tracking-[0.1em] flex w-full items-center justify-center gap-2 rounded-sm border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary-soft cursor-pointer disabled:opacity-60"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"
            ></path>
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            ></path>
            <path
              fill="#FBBC05"
              d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z"
            ></path>
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
            ></path>
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 min-h-[calc(100vh-160px)] flex items-center justify-center">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 w-full">
          <div className="hidden lg:block flex flex-col items-start h-[100%]">
            <p className="font-body uppercase text-[12px] tracking-[0.2rem] font-medium text-secondary-foreground">
              Access Your Healthcare Portal
            </p>
            <h1 className="mt-5 text-balance text-foreground font-header text-4xl font-medium leading-[1.08] tracking-wide lg:text-[3.5rem]">
              Trusted Access, to{" "}
              <span className="italic text-primary-deep">Medical Care</span>
            </h1>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted-foreground">
              Log in to access your personalized MediTech Care account. Whether
              you are providing care or seeking it, your healthcare tools are
              just a step away.
            </p>

            <div className="mt-8 space-y-4 font-body text-sm text-muted-foreground">
              <div className="flex gap-4 items-center rounded-sm border border-border bg-card p-4 transition-colors hover:bg-primary-soft/50">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary-soft text-primary-deep">
                  <ShieldCheck
                    className="size-5"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </span>
                <span>
                  Every doctor's license is reviewed manually before dashboard
                  access is granted.
                </span>
              </div>

              <div className="flex gap-4 items-center rounded-sm border border-border bg-card p-4 transition-colors hover:bg-primary-soft/50">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary-soft text-primary-deep">
                  <ShieldCheck
                    className="size-5"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </span>
                <span>
                  Encrypted records and role-based access controls, aligned with
                  medical data standards.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Container */}
          <div className="w-full flex justify-center">
            <AuthCardContainer isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
