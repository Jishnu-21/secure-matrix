"use client";

const AboutContent = () => {
  return (
    <section className="py-16 px-4 relative z-20 -mt-10">
      <div className="container mx-auto max-w-[1400px] min-h-[800px] bg-white p-12 rounded-lg shadow-lg">
        <div className="space-y-20">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-center text-black">Qui sommes-nous ?</h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <div className="max-w-[800px] mx-auto">
              <p className="text-gray-700 text-base leading-relaxed">
                Depuis notre création, nous nous sommes engagés à révolutionner la téléprospection et le développement commercial.
                Notre histoire est celle d'une équipe passionnée travaillant main dans la main avec nos clients pour atteindre leurs
                objectifs.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-medium mb-4 text-center text-black">Notre Mission</h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <div className="max-w-[800px] mx-auto">
              <p className="text-gray-700 text-base leading-relaxed">
                Chez CRO, notre mission est simple : alléger le fardeau de vos équipes de vente et propulser votre croissance grâce à des 
                services de téléprospection exceptionnels et une stratégie personnalisée.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-medium mb-4 text-center text-black">Pourquoi nous ?</h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <div className="max-w-[800px] mx-auto">
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Nous sommes bien plus qu'une agence de téléprospection ; nous sommes votre partenaire de croissance. Explorez notre
                univers et découvrez comment Bizdev.store peut stimuler votre activité commerciale.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Approche humaine dans la prospection B2B.
              </p>
              <ul className="text-gray-700 space-y-2 text-base leading-relaxed">
                <li>• Expertise inégalée dans le développement commercial.</li>
                <li>• Résultats concrets et mesurables.</li>
                <li>• Engagement envers la satisfaction client.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
