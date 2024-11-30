import FaqItem from "./FaqItem";
import { faqItems } from "./FaqData";

export default function Faq() {
  return (
    <section className="bg-[#151820] mb-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Questions Fréquentes sur les AI Sexy Girlfriends
        </h2>
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}