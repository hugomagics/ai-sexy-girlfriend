import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-[#1c202b] rounded-xl hover:shadow-lg transition-all">
      <Icon className="w-12 h-12 text-pink-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}