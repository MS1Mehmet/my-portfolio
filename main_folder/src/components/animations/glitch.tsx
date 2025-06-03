import { PowerGlitch } from 'powerglitch';

// Glitch-Logik anwenden
export const applyGlitch = (selector: string) => {
  // Sicherstellen, dass PowerGlitch nur im Browser verwendet wird
  if (typeof window !== "undefined") {
    // Funktion zum Starten des Glitches
    const startGlitch = () => {
      PowerGlitch.glitch(selector, {
        playMode: 'always',
        createContainers: true,
        hideOverflow: true,
        timing: {
          duration: 4000,  // Glitch Dauer 1 Sekunde
          iterations: 1,   // Der Glitch wird nur einmal pro Zyklus abgespielt
          easing: 'ease-in-out',
        },
        glitchTimeSpan: {
          start: 0.1,  // Beginnt nach 10% der Dauer
          end: 0.2,    // Endet nach 20% der Dauer
        },
        shake: {
          velocity: 60,
          amplitudeX: 0.5,
          amplitudeY: 0.5,
        },
        slice: {
          count: 6,
          velocity: 40,
          minHeight: 0.02,
          maxHeight: 0.2,
          hueRotate: true,
        },
      });
    };

    // Initialer Glitch-Effekt starten
    startGlitch();

    // Wiederhole den Glitch alle 8 Sekunden
    setInterval(() => {
      // Glitch-Effekt erneut auslösen
      startGlitch();
    }, 4000);  // Alle 8 Sekunden
  }
};



