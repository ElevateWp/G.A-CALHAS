'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { CLINIC_INFO } from '@/lib/clinic-data';
import { MOTION, isReducedMotion } from '@/lib/motion';
import Button from '@/components/ui/Button';

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const words = wordsRef.current.filter(Boolean);

    const tl = gsap.timeline({
      delay: 0.5,
    });

    // 0.50s H1 word reveal
    if (words.length > 0) {
      tl.fromTo(
        words,
        { y: '115%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.85,
          stagger: 0.04,
          ease: 'power3.out',
        }
      );
    }

    // Supporting paragraph fades up
    if (paraRef.current) {
      tl.fromTo(
        paraRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    }

    // Actions arrive with scale
    if (actionsRef.current) {
      tl.fromTo(
        actionsRef.current.children,
        { scale: 0.95, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    // Business information slides in from right
    if (infoRef.current) {
      tl.fromTo(
        infoRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    }

    // Service area line
    if (locationRef.current) {
      tl.fromTo(
        locationRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.3'
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  const headline = 'Calhas e telhados bem feitos para proteger seu imóvel.';
  const headlineWords = headline.split(' ');

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-paper overflow-hidden py-12 sm:py-16 md:py-24"
    >
      <Image
        src="/images/ga-project-02.jpg"
        alt="Serviço de calhas e telhados da G.A Calhas em Itapevi"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] grayscale sepia-[0.2]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/95 via-[#FFFFFF]/90 to-[#FFFFFF]/80 md:from-[#FFFFFF]/95 md:via-[#FFFFFF]/90 md:to-[#FFFFFF]/78"
      />

      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columns 1–8: Left-aligned H1, Paragraph, Actions */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Semantic Single H1 */}
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#AEB5BC]" />
              <span className="font-body text-[11px] text-[#6B7178] uppercase tracking-[0.14em]">
                Calhas, telhados e rufos · Itapevi, São Paulo
              </span>
            </div>
            <h1
              ref={h1Ref}
              aria-label={headline}
              className="font-display text-[#1C1F23] text-33 sm:text-41 md:text-52 lg:text-65 xl:text-81 leading-[1.05] tracking-[-0.03em] font-normal mb-6 md:mb-8 max-w-4xl"
            >
              {headlineWords.map((word, idx) => (
                <React.Fragment key={idx}>
                  <span className="inline-block overflow-hidden align-top pb-[0.08em] mr-[0.24em] last:mr-0">
                    <span
                      ref={(el) => {
                        if (el) wordsRef.current[idx] = el;
                      }}
                      className={`inline-block will-change-transform ${['Calhas', 'telhados', 'proteger'].includes(word) ? 'text-[#AEB5BC]' : ''}`}
                    >
                      {word}
                    </span>
                  </span>
                  {(idx === 1 || idx === 4) && (
                    <br className="hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </h1>

            <p
              ref={paraRef}
              className="font-body text-15 sm:text-17 md:text-21 text-forest-ink/90 leading-relaxed mb-8 md:mb-10 max-w-2xl"
            >
              Limpeza e instalação de calhas, rufos e serviços de telhado em Itapevi. Fale com a equipe para solicitar uma avaliação e orçamento.
            </p>

            <div
              ref={actionsRef}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8"
            >
              <Button href="https://www.google.com/maps/search/?api=1&query=Av.+Ces%C3%A1rio+de+Abreu%2C+1258%20-%20Dos%20Abreus%2C%20Itapevi%20-%20SP%2C%2006653-440%2C%20Brasil" variant="forest" size="lg" className="w-full sm:w-auto font-medium">
                Como chegar
              </Button>
              <Button
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto font-medium"
              >
                Ligar: {CLINIC_INFO.contact.phone}
              </Button>
            </div>

            <div
              ref={locationRef}
              className="font-body text-13 text-[#1C1F23]/70 flex flex-wrap items-center gap-2"
            >
                <span className="font-medium text-[#1C1F23]">Seg–Qui 7h–18h · Sáb 8h–14h</span>
              <span className="hidden sm:inline">•</span>
              <span>Itapevi, São Paulo, Brasil</span>
              <span className="hidden sm:inline">•</span>
            </div>
          </div>

          {/* Company and contact details */}
          <div
            ref={infoRef}
            className="lg:col-span-4 lg:pl-4 flex flex-col justify-center"
          >
            <div className="p-6 sm:p-8 bg-[#F3F5F7] border border-[#D5D9DE] shadow-sm flex flex-col space-y-4">
              <span className="font-body text-13 text-[#1C1F23] uppercase tracking-wider font-semibold">
                Serralheria e vidraçaria · Calhas e telhados
              </span>
              <p className="font-body text-13 sm:text-15 text-[#1C1F23]/90 leading-relaxed">
                <strong className="text-[#1C1F23] font-semibold">G.A Calhas</strong> &mdash; limpeza, instalação e manutenção de calhas e coberturas.
              </p>
              <div className="pt-3 border-t border-[#D5D9DE] flex items-center justify-between text-13 font-body text-[#1C1F23]/70">
                <span>Telefone</span>
                <span className="text-[#1C1F23] font-semibold">{CLINIC_INFO.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
