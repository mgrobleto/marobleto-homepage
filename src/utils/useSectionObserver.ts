'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

export function useSectionObserver(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useLayoutEffect(() => {
    const sections = sectionIds.map(id => {
      return document.getElementById(id)
    }).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
        (entries) => {
          let maxRatio = 0;
          let mostVisibleSection = ''

          entries.forEach(entry => {
            if(entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;

                const id = entry.target.id === 'home-observer-proxy' ? 'home' : entry.target.id
                mostVisibleSection = id;
                console.log('Este es el id:' + id)
                //console.log(`Sección visible: ${entry.target.id}`);
                //setActiveSection(`${entry.target.id}`)
            }
          });

          if (mostVisibleSection && mostVisibleSection !== activeSection) {
            setActiveSection(mostVisibleSection)
          }
        },
        {
          rootMargin: '0px 0px 100px 0px',
          threshold: [0.1, 0.25, 0.5, 0.75, 1],
        }
    )
    
    sections.forEach(section => observer.observe(section))
    console.log('Secciones encontradas:', sections);
    console.log('Elemento home-observer-proxy:', document.getElementById('home-observer-proxy'));

    return () => observer.disconnect();
  }, []);

  return { activeSection };
}