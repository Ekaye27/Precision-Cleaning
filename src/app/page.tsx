import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BadgeCheck,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import ServiceCard from "@/components/ServiceCard";
import {
  processSteps,
  serviceAreas,
  services,
  siteConfig,
  values,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-950">
        <HeroSlideshow className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-ink-950/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-8">
          <Reveal className="max-w-2xl">
            <SectionBadge icon={Sparkles}>
              Trusted Cleaning Professionals
            </SectionBadge>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_16px_rgb(0_0_0_/_55%)] sm:text-5xl lg:text-6xl">
              Professional Cleaning{" "}
              <span className="text-gradient">Service</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg font-semibold text-white [text-shadow:0_1px_10px_rgb(0_0_0_/_55%)] sm:text-xl">
              From homes to businesses, we provide dependable, high-quality
              cleaning services tailored to your needs.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-100 [text-shadow:0_1px_8px_rgb(0_0_0_/_50%)] sm:text-lg">
              We also provide residential cleaning, condo and apartment
              cleaning, Airbnb and vacation rental turnovers, seasonal
              property cleaning, move-in/move-out cleaning, post-construction
              cleaning, deep cleaning, and absentee homeowner services.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-aqua-500/30 transition-transform hover:scale-105"
              >
                Book a Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-100 [text-shadow:0_1px_6px_rgb(0_0_0_/_50%)]">
              {[
                "Eco-friendly products",
                "Vetted & insured teams",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-aqua-400" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/services-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 section-scrim-light" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={Sparkles}>Our Services</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              From homes to businesses, we provide dependable, high-quality
              cleaning services{" "}
              <span className="text-gradient">tailored to your needs</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDescription}
                  href={`/services/${service.slug}`}
                  image={service.image}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-sm transition-colors hover:border-aqua-300 hover:text-aqua-600"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/whychoose-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 section-scrim" />
          <div className="absolute inset-0 bg-grid-light opacity-30" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal className="text-center">
            <SectionBadge icon={BadgeCheck}>Why Choose Us</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cleaning, done with{" "}
              <span className="text-gradient">precision</span> & care
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              We combine trained professionals, premium equipment, and
              eco-conscious products to deliver consistent, reliable results
              you can count on.
            </p>
            <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-400/10 text-aqua-300 ring-1 ring-aqua-400/30">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/process-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 section-scrim-light" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={Sparkles}>How It Works</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Get started in{" "}
              <span className="text-gradient">four simple steps</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="font-display text-5xl font-extrabold text-ink-100">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={MapPin}>Service Areas</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Proudly serving{" "}
              <span className="text-gradient">Palm Beach County</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From Boynton to Boca Raton, our team brings the same
              high-standard cleaning to every job.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((area, i) => (
              <Reveal key={area} delay={(i % 5) * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-lg">
                  <MapPin className="h-5 w-5 shrink-0 text-aqua-500" />
                  <span className="font-display text-sm font-semibold text-ink-950">
                    {area}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schema-friendly hidden contact info for SEO */}
      <span className="sr-only">{siteConfig.address}</span>
    </>
  );
}
