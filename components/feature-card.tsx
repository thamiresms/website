import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "minimal";
}

export function FeatureCard({ icon: Icon, title, description, variant = "default" }: FeatureCardProps) {
  if (variant === "minimal") {
    return (
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-xl bg-neutral-900 flex items-center justify-center flex-shrink-0">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-neutral-900 text-lg mb-2">{title}</h3>
          <p className="text-neutral-600 leading-relaxed text-[15px]">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 h-full border border-neutral-100">
      <div className="h-12 w-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

