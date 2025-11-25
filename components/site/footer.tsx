import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const footerLinks = {
  product: [
    { label: "Why Salient", href: "/why-salient" },
    { label: "Taylor", href: "/agents/taylor" },
    { label: "Marshall", href: "/agents/marshall" },
    { label: "Alex", href: "/agents/alex" },
    { label: "Flynn", href: "/agents/flynn" },
  ],
  company: [
    { label: "About", href: "/company" },
    { label: "Customers", href: "/customers" },
    { label: "Compliance", href: "/compliance" },
  ],
  resources: [
    { label: "Book a demo", href: "/pilot" },
    { label: "Contact", href: "/pilot" },
  ],
};

export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-100 bg-neutral-50">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image 
                src="/salient_logo.avif" 
                alt="Salient" 
                width={140} 
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-xs">
              AI agents built for US consumer lenders. Compliance-first automation for collections, disputes, and more.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Product</h3>
            <nav className="grid gap-3">
              {footerLinks.product.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Company</h3>
            <nav className="grid gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Get Started</h3>
            <nav className="grid gap-3">
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <Container className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Salient, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
