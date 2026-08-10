import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HelpCircle, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import Accordion from "@/components/Accordion";
import { pricingFaqs, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, straightforward pricing for residential and commercial cleaning. Find the plan that fits your space and schedule.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Simple, Transparent Pricing"
        icon={Tag}
        title="Plans that fit your"
        highlight="space & budget"
        description="Pricing is based on the size of your property and the services you need. Request a personalized quote to get started."
        crumb="Pricing"
      />

      {/* Per-service rates */}
      <section className="relative overflow-hidden bg-ink-50/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={Tag}>Service Rates</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Pricing by <span className="text-gradient">service</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Every property is different. Complete the quote form for a
              personalized estimate based on your property and the services
              you need.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((service) => service.pricing)
              .map((service, i) => (
                <Reveal key={service.slug} delay={i * 0.08} className="h-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-400/10 text-aqua-600 ring-1 ring-aqua-400/30">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink-950">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.pricing}
                    </p>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/services-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 section-scrim" />
          <div className="absolute inset-0 bg-grid-light opacity-30" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal className="text-center">
            <SectionBadge icon={HelpCircle}>FAQ</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently asked{" "}
              <span className="text-gradient">questions</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Still have questions? Let&apos;s transform your space — reach
              out and we&apos;ll walk you through it.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <Accordion items={pricingFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
