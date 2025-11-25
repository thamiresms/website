import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Clock, Shield, DollarSign } from "lucide-react";

export const metadata = {
  title: "Customers — Banks, Credit Unions, and Auto Lenders | Salient",
  description:
    "From banks and credit unions to specialized auto lenders and fintechs, Salient supports teams that live with regulatory exams and high-volume operations.",
};

export default function CustomersPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 md:pt-24 lg:pt-32 pb-16">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="prose-title">Trusted by leading US lenders</h1>
              <p className="mt-6 prose-subhead">
                From banks and credit unions to specialized auto lenders and fintechs, 
                Salient supports teams that live with regulatory exams and high-volume 
                servicing operations.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Logo Wall */}
      <Section className="bg-neutral-50 py-12">
        <Container>
          <FadeIn>
            <p className="text-center text-sm text-neutral-500 mb-8">
              Trusted by banks, credit unions, auto lenders, and fintechs across the US
            </p>
          </FadeIn>
          <div className="relative w-full overflow-hidden py-4">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Animated Logo Carousel */}
            <div className="flex logo-scroll">
              {/* Duplicate logos twice for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex flex-shrink-0 items-center">
                  {[
                    { name: "Westlake Financial", src: "/customers/westlake.webp" },
                    { name: "UACC", src: "/customers/uacc.avif" },
                    { name: "Exeter Finance", src: "/customers/exeter.avif" },
                    { name: "CPS", src: "/customers/cps.avif" },
                    { name: "ACA", src: "/customers/aca.avif" },
                  ].map((logo, i) => (
                    <div
                      key={`${logo.name}-${setIndex}-${i}`}
                      className="flex-shrink-0 mx-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={160}
                        height={48}
                        className="h-10 w-auto object-contain"
                        priority={setIndex === 0}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="prose-head">Results that speak for themselves</h2>
              <p className="mt-4 prose-subhead">
                Lenders using Salient see measurable improvements across collections, 
                disputes, compliance, and operational efficiency.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                icon: DollarSign,
                agent: "Taylor",
                metric: "Collections",
                result: "15-25% increase in net recovery",
                detail: "While reducing manual call volume by 40%",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: Clock,
                agent: "Alex",
                metric: "Disputes",
                result: "60% faster resolution",
                detail: "With cleaner documentation and fewer re-works",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: Shield,
                agent: "Marshall",
                metric: "Compliance",
                result: "100% QA coverage",
                detail: "Up from 2-5% with manual sampling",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: TrendingUp,
                agent: "Flynn",
                metric: "Total Loss",
                result: "12% higher settlements",
                detail: "With 50% faster cycle times",
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
            ].map((item) => (
              <FadeInStaggerItem key={item.metric}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100 h-full">
                  <div className={`h-12 w-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div className="text-sm text-neutral-500 mb-1">{item.agent}</div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{item.metric}</h3>
                  <div className={`text-xl font-semibold ${item.color} mb-2`}>{item.result}</div>
                  <p className="text-sm text-neutral-600">{item.detail}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="prose-head">Customer stories</h2>
              <p className="mt-4 prose-subhead">
                See how lenders like you are using Salient to transform their operations.
              </p>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {/* Westlake Financial Case Study */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Left Column - Content */}
                  <div className="p-10 lg:p-14 flex flex-col justify-between">
                    <div>
                      <div className="mb-8">
                        <Image
                          src="/customers/westlake.webp"
                          alt="Westlake Financial"
                          width={180}
                          height={40}
                          className="h-10 w-auto"
                        />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Leading US auto-lender
                      </h3>
                      
                      <div className="mb-8">
                        <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                          <div className="text-sm font-medium text-neutral-500 mb-2">
                            Use case
                          </div>
                          <div className="text-lg font-medium text-neutral-900">
                            Taylor | Alex | Flynn
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                          <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                            $12M+
                          </div>
                          <div className="font-semibold text-neutral-900 mb-1">
                            annual saving
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                          <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                            45%
                          </div>
                          <div className="font-semibold text-neutral-900 mb-1">
                            reduction
                          </div>
                          <div className="text-sm text-neutral-600">
                            in annual savings
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Button size="lg" className="bg-black text-white hover:bg-neutral-800 rounded-full px-8">
                        Learn more
                      </Button>
                    </div>
                  </div>

                  {/* Right Column - Visual */}
                  <div className="relative bg-neutral-900 min-h-[500px] lg:min-h-[600px] flex items-center justify-center p-8">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-full max-w-md aspect-square">
                        {/* Sophisticated 3D Grid Visual */}
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                          <defs>
                            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
                              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
                            </linearGradient>
                          </defs>
                          {/* 3D Grid Lines */}
                          {Array.from({ length: 20 }).map((_, i) => (
                            <g key={`grid-${i}`} opacity={0.3}>
                              <line
                                x1={20 + i * 18}
                                y1="50"
                                x2={20 + i * 18}
                                y2="350"
                                stroke="url(#gridGradient)"
                                strokeWidth="0.5"
                              />
                              <line
                                x1="20"
                                y1={50 + i * 15}
                                x2="380"
                                y2={50 + i * 15}
                                stroke="url(#gridGradient)"
                                strokeWidth="0.5"
                              />
                            </g>
                          ))}
                          {/* Perspective Box */}
                          <path
                            d="M 100 150 L 300 150 L 340 190 L 340 320 L 140 320 L 100 280 Z"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            opacity="0.6"
                          />
                          <path
                            d="M 300 150 L 300 280 L 340 320"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            opacity="0.6"
                          />
                          <path
                            d="M 100 150 L 100 280"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            opacity="0.6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Second Case Study */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Left Column - Content */}
                  <div className="p-10 lg:p-14 flex flex-col justify-between">
                    <div>
                      <div className="mb-8">
                        <div className="h-10 w-10 bg-neutral-900 rounded-full flex items-center justify-center">
                          <div className="text-white font-bold text-xl">L</div>
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Leading US auto-lender
                      </h3>
                      
                      <div className="mb-8">
                        <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                          <div className="text-sm font-medium text-neutral-500 mb-2">
                            Use case
                          </div>
                          <div className="text-lg font-medium text-neutral-900">
                            Taylor | Alex
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                          <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                            300k+
                          </div>
                          <div className="font-semibold text-neutral-900 mb-1">
                            calls automated
                          </div>
                          <div className="text-sm text-neutral-600">
                            per month
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                          <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                            55%
                          </div>
                          <div className="font-semibold text-neutral-900 mb-1">
                            PTP rate
                          </div>
                          <div className="text-sm text-neutral-600">
                            on collections
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Button size="lg" className="bg-black text-white hover:bg-neutral-800 rounded-full px-8">
                        Learn more
                      </Button>
                    </div>
                  </div>

                  {/* Right Column - Visual */}
                  <div className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 min-h-[500px] lg:min-h-[600px] flex items-center justify-center p-8">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-full max-w-md aspect-square">
                        {/* Layered Cards Visual */}
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                          <defs>
                            <filter id="shadow">
                              <feDropShadow dx="0" dy="10" stdDeviation="20" floodOpacity="0.3"/>
                            </filter>
                          </defs>
                          {/* Layered rectangular cards */}
                          <rect
                            x="50"
                            y="120"
                            width="300"
                            height="200"
                            rx="15"
                            fill="#ffffff"
                            filter="url(#shadow)"
                            opacity="0.4"
                            transform="rotate(-5 200 220)"
                          />
                          <rect
                            x="50"
                            y="100"
                            width="300"
                            height="200"
                            rx="15"
                            fill="#ffffff"
                            filter="url(#shadow)"
                            opacity="0.6"
                            transform="rotate(-2 200 200)"
                          />
                          <rect
                            x="50"
                            y="80"
                            width="300"
                            height="200"
                            rx="15"
                            fill="#ffffff"
                            filter="url(#shadow)"
                          />
                          {/* Accent lines on top card */}
                          <line x1="80" y1="120" x2="180" y2="120" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                          <line x1="80" y1="150" x2="320" y2="150" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="80" y1="180" x2="280" y2="180" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="80" y1="210" x2="250" y2="210" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      <Section className="bg-neutral-50">
        <Container>
          <FadeIn>
            <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white">
              <div className="max-w-3xl">
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
                  "Salient gave us the ability to scale our collections operation without 
                  adding headcount—and our compliance team actually sleeps better at night 
                  knowing every interaction is logged and auditable."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/10" />
                  <div>
                    <div className="font-medium">VP of Servicing</div>
                    <div className="text-white/60 text-sm">Regional Auto Lender</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-neutral-50">
        <Container className="text-center">
          <FadeIn>
            <h2 className="prose-head">See what a pilot could look like for you</h2>
            <p className="mt-4 prose-subhead max-w-2xl mx-auto">
              Book a demo to discuss your specific use cases and see how Salient 
              can transform your lending operations.
            </p>
            <div className="mt-10">
              <Link href="/pilot">
                <Button size="lg" className="gap-2">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
