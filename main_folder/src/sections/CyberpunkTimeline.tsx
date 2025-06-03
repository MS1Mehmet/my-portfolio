
import React from 'react';

const stations = [
  {
    title: 'Berufsschule ITECH',
    description: 'mittlere Reife (Elektrotechnik - Informationstechnik)',
    date: '2011 – 2014',
  },
  {
    title: 'Anlagen- & Konstruktionstechnik BS13',
    description: 'Hochschulreife (Bautechnik - Datenverarbeitung - Erneuerbare Energien)',
    date: '2014 – 2017',
  },
  {
    title: 'HAW Hamburg',
    description: 'B.Sc. Medieninformatik',
    date: '2020 – laufend',
  },
];

const timeline = [
  {
    image: "/school.svg",
  },
  {
    image: "/school_2.svg",
  },
  {
    image: "/university.svg",
  },
];

const CyberpunkTimeline = () => (
  <section className="bg-white/10 backdrop-blur-lg border border-white/20 z-0 py-12 mx-4 rounded-2xl">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stations.map((station, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Icon */}
            <div className="w-16 h-16 xl:w-24 xl:h-24 flex items-center justify-center rounded-lg border-2 border-cyan-400 shadow-lg bg-[#112240] text-cyan-400 text-2xl">
              <img
                src={timeline[idx].image}
                alt={`Icon für ${station.title}`}
                className="w-10 h-10 xl:w-16 xl:h-16"
              />
            </div>

            {/* Text */}
            <div className="mt-4 max-w-xs">
              <h4 className="text-1.5xl font-bold font-oxanium text-cyan-300">{station.title}</h4>
              <p className="text-xl font-oxanium text-gray-300 mt-1">{station.description}</p>
              <p className="text-base font-oxanium text-gray-500 mt-1">{station.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CyberpunkTimeline;
