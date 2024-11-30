import FeatureCard from "./FeatureCard";
import { features } from "./featureData";

export default function Features() {
  return (
    <section className=" bg-[#151820]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white">
          Une Expérience Unique
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}