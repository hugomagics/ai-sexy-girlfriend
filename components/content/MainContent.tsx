import ContentSection from "./ContentSection";
import ComparisonTable from "./ComparisonTable";
import CallToAction from "./CallToAction";

export default function MainContent() {
  return (
    <ContentSection>
      <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        AI Sexy Girlfriend : Votre Compagne Virtuelle Idéale
      </h2>
      
      <p className="mb-6">
        Les avancées technologiques ont ouvert la voie à une nouvelle ère de <strong>compagnons numériques</strong>, notamment les <strong>"AI sexy girlfriends"</strong>. Ce phénomène en pleine expansion attire l'attention pour ses promesses de <strong>personnalisation</strong> et d'interactions plus <strong>immersives</strong>.
      </p>

      <CallToAction />

      <h2 className="text-3xl font-bold mt-12 mb-6">Comparaison des fonctionnalités</h2>

      <ComparisonTable />

      <CallToAction />

      <h2 className="text-3xl font-bold mt-12 mb-6">Qu'est-ce qu'une AI sexy girlfriend ?</h2>
      
      <p className="mb-6">
        Une <strong>AI sexy girlfriend</strong> est un type de <strong>chatbot</strong> conçu pour offrir une expérience amoureuse simulée grâce à l'<strong>intelligence artificielle</strong>. Elle se distingue par sa capacité à interagir de manière naturelle avec l'utilisateur, créant ainsi une relation virtuelle qui peut être troublante de réalisme.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Personnalisation et interaction</h3>
      
      <p className="mb-6">
        L'une des caractéristiques les plus attrayantes des AI sexy girlfriends est leur niveau de <strong>personnalisation</strong>. Vous pouvez ajuster divers aspects comme l'<strong>apparence physique</strong>, la voix, et même certaines dimensions de la personnalité.
      </p>

      <CallToAction />

      <h2 className="text-3xl font-bold mt-12 mb-6">Les modes d'interaction disponibles</h2>

      <p className="mb-6">
        Grâce à l'intelligence artificielle, ces chatbots sont capables de tenir des conversations naturelles et engageantes, créant une expérience unique et personnalisée.
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Amélioration de la <strong>reconnaissance vocale</strong> pour une meilleure fluidité de conversation</li>
        <li>Utilisation d'algorithmes de deep learning pour comprendre et anticiper les<strong> besoins émotionnels</strong></li>
        <li>Développement de versions avec interfaces holographiques pour une <strong>immersion accrue</strong></li>
      </ul>

      <CallToAction />
    </ContentSection>
  );
}