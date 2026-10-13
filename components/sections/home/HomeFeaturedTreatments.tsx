import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#1C1F23] block mb-2 font-medium uppercase tracking-wider">
            Nossos serviços
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#1C1F23]">
            Calhas, rufos e telhados
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Products and shopping options */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#1C1F23] uppercase tracking-wider block mb-2 font-medium">
                Instalação e manutenção
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#1C1F23] mb-4">
                Proteção contra a chuva
              </h3>
              <p className="font-body text-15 md:text-17 text-[#1C1F23]/80 leading-relaxed mb-6">
                Limpeza, instalação e reparos de calhas para direcionar a água da chuva para longe do imóvel.
              </p>
              <div className="p-4 bg-[#F3F5F7] border-l-4 border-[#1C1F23] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#1C1F23]/80">
                  <strong className="text-[#1C1F23] font-semibold">Atendimento:</strong> solicite uma avaliação e um orçamento para o seu imóvel.
                </span>
              </div>
              <Button href={`tel:+5511985934913`} variant="ghost" size="md">
                Solicitar orçamento
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/ga-project-03.jpg"
                  alt="Calha metálica instalada em uma cobertura"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Materials and delivery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/ga-project-08.jpg"
                  alt="Serviço em telhado residencial"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#1C1F23] uppercase tracking-wider block mb-2 font-medium">
                Telhados e rufos
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#1C1F23] mb-4">
                Reparos de cobertura
              </h3>
              <p className="font-body text-15 md:text-17 text-[#1C1F23]/80 leading-relaxed mb-6">
                A equipe avalia telhas, junções e acabamentos para conversar sobre o reparo indicado.
              </p>
              <div className="p-4 bg-[#F3F5F7] border-l-4 border-[#1C1F23] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#1C1F23]/80">
                  <strong className="text-[#1C1F23] font-semibold">Solicite uma avaliação:</strong> o orçamento é definido após verificar o local.
                </span>
              </div>
              <Button href={`tel:+5511985934913`} variant="ghost" size="md">
                Ligar para a equipe
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
