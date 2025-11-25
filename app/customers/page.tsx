import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
              Serving lenders across the US
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6" staggerDelay={0.05}>
            {Array.from({ length: 12 }).map((_, i) => (
              <FadeInStaggerItem key={i}>
                <div className="bg-white rounded-xl py-8 px-4 flex items-center justify-center border border-neutral-100">
                  <div className="text-neutral-300 font-medium">Logo</div>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
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
      <Section className="bg-neutral-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="prose-head">Customer stories</h2>
              <p className="mt-4 prose-subhead">
                See how lenders like you are using Salient to transform their operations.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-8 md:grid-cols-3" staggerDelay={0.1}>
            {[
              {
                type: "Regional Bank",
                title: "Scaling collections without scaling headcount",
                metrics: ["25% increase in recovery", "40% reduction in call volume", "Zero compliance findings"],
                agents: ["Taylor", "Marshall"],
              },
              {
                type: "Auto Finance Company",
                title: "Automating total-loss from notification to settlement",
                metrics: ["12% higher settlements", "50% faster cycle time", "Complete audit trail"],
                agents: ["Flynn"],
              },
              {
                type: "Credit Union",
                title: "100% QA coverage for the first time",
                metrics: ["100% interaction review", "3x more coaching insights", "Exam-ready evidence"],
                agents: ["Marshall"],
              },
            ].map((study) => (
              <FadeInStaggerItem key={study.title}>
                <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100 h-full flex flex-col">
                  <div className="text-sm text-neutral-500 mb-2">{study.type}</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">{study.title}</h3>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {study.metrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-2 text-sm text-neutral-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 pt-4 border-t border-neutral-100">
                    <span className="text-xs text-neutral-500">Agents:</span>
                    {study.agents.map((agent) => (
                      <span key={agent} className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* Testimonial */}
      <Section>
        <Container>
          <FadeIn>
            <div className="bg-brand-dark rounded-3xl p-8 md:p-12 lg:p-16 text-white">
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
