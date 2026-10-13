import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const GALLERY_IMAGES = [
  { src: '/images/ga-project-01.jpg', alt: 'Reparo em telhado de telhas cerâmicas' },
  { src: '/images/ga-project-02.jpg', alt: 'Imóvel atendido pela G.A Calhas em Itapevi' },
  { src: '/images/ga-project-03.jpg', alt: 'Calha metálica instalada em cobertura' },
  { src: '/images/ga-project-04.jpg', alt: 'Acabamento de telhado e calha' },
  { src: '/images/ga-project-05.jpg', alt: 'Detalhe de rufo metálico em telhado' },
  { src: '/images/ga-project-06.jpg', alt: 'Calha e acabamento de cobertura' },
  { src: '/images/ga-project-07.jpg', alt: 'Instalação de calhas em imóvel' },
  { src: '/images/ga-project-08.jpg', alt: 'Trabalho de manutenção em telhado' },
  { src: '/images/ga-project-09.jpg', alt: 'Ferramentas para serviço de calhas' },
  { src: '/images/ga-project-10.jpg', alt: 'Cobertura metálica em imóvel' },
  { src: '/images/ga-project-11.jpg', alt: 'Telhado com calhas e rufos' },
  { src: '/images/ga-project-12.jpg', alt: 'Projeto de telhado concluído' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#AEB5BC] block mb-2 font-medium uppercase tracking-wider">
            G.A Calhas Serralheria e Vidraçaria
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#1C1F23]">
            Telhados, calhas e projetos
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F3F5F7] overflow-hidden border border-[#D5D9DE] shadow-sm`}
            >
              <MediaParallax speed={index === 0 ? 0.06 : 0.08} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation="zoom-in"
              duration={0.8}
              delay={(index % 3) * 0.1}
              className="aspect-[4/3] relative bg-[#F3F5F7] overflow-hidden border border-[#D5D9DE] shadow-sm"
            >
              <MediaParallax speed={0.05 + (index % 3) * 0.01} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
