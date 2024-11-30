import { MessageCircle, Heart, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Conversations Naturelles",
    description: "Profitez de discussions fluides et naturelles grâce à notre technologie AI avancée."
  },
  {
    icon: Heart,
    title: "Connection Émotionnelle",
    description: "Développez une véritable connexion émotionnelle avec votre compagne virtuelle."
  },
  {
    icon: Shield,
    title: "Confidentialité Assurée",
    description: "Vos conversations et données personnelles sont totalement sécurisées."
  },
  {
    icon: Sparkles,
    title: "Personnalisation Unique",
    description: "Une expérience sur mesure adaptée à vos préférences et votre personnalité."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Une Expérience Unique
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all">
              <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}