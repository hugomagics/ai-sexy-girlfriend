
export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
        <thead>
          <tr>
            <th className="p-4 text-left border border-gray-200 dark:border-gray-700 text-white bg-transparent">Fonctionnalité</th>
            <th className="p-4 text-left border border-gray-200 dark:border-gray-700 text-white bg-transparent">AI Sexy Girlfriend</th>
            <th className="p-4 text-left border border-gray-200 dark:border-gray-700 text-white bg-transparent">Chatbot Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Personnalisation</td>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Complète (apparence, voix, personnalité)</td>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Limitée</td>
          </tr>
          <tr>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Intelligence émotionnelle</td>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Avancée</td>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Basique</td>
          </tr>
          <tr>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Interactions naturelles</td>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Très naturelles</td>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Scriptées</td>
          </tr>
          <tr>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Apprentissage continu</td>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Oui</td>
            <td className="p-4 border border-gray-200 dark:border-gray-700">Non</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}