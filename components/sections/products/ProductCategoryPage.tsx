import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';

const categoryImages: Record<string, { src: string; alt: string }> = {
  'limpeza-de-calhas': { src: '/images/ga-project-01.jpg', alt: 'Reparo em telhado de telhas cerâmicas' },
  'instalacao-de-calhas': { src: '/images/ga-project-09.jpg', alt: 'Ferramentas para serviço de calhas' },
  'manutencao-de-telhados': { src: '/images/ga-project-03.jpg', alt: 'Calha metálica em cobertura' },
  'instalacao-de-rufos': { src: '/images/ga-project-06.jpg', alt: 'Acabamento de telhado e calha' },
  'reparos-de-telhado': { src: '/images/ga-project-07.jpg', alt: 'Instalação de calhas em imóvel' },
  'coberturas-metalicas': { src: '/images/ga-project-08.jpg', alt: 'Manutenção em telhado residencial' },
};

export default function ProductCategoryPage({ slug }: { slug: string }) {
  const category = SERVICES.find((item) => item.slug === slug);
  if (!category) return null;
  const image = categoryImages[slug] || categoryImages['limpeza-de-calhas'];

  return (
    <main className="w-full bg-paper">
      <JsonLd data={generateFaqSchema(category.faqs)} />
      <section className="border-b border-mist bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: category.name, path: `/${slug}/` }]} />
            <AnimateOnScroll animation="fade-right">
              <span className="mb-3 mt-8 block font-body text-13 font-medium uppercase tracking-wider text-brand">G.A Calhas Serralheria e Vidraçaria · Itapevi</span>
              <h1 className="font-display text-41 text-forest-ink md:text-55">{category.name}</h1>
              <p className="mt-5 max-w-xl font-body text-17 leading-relaxed text-forest-light">{category.shortDescription}</p>
              <p className="mt-4 max-w-xl font-body text-15 leading-relaxed text-forest-light">Fale com a equipe para solicitar uma avaliação e orçamento do serviço.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="forest" size="lg">Ligar para a equipe</Button>
                <Link href="/contact/" className="inline-flex min-h-12 items-center rounded-pill border border-mist px-6 font-body text-15 text-forest-ink hover:border-brand">Contato e orçamento</Link>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="zoom-in" duration={0.8}>
            <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-paper shadow-sm">
              <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" className="lg:col-span-5">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Entenda o serviço</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">{category.tagline}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" className="lg:col-span-7">
            <p className="font-body text-17 leading-relaxed text-forest-light">{category.clinicalExplanation}</p>
            <div className="mt-6 border-l-2 border-brand pl-5">
              <h3 className="font-display text-21 text-forest-ink">Quem pode solicitar uma avaliação?</h3>
              <p className="mt-2 font-body text-15 leading-relaxed text-forest-light">Este serviço pode ser considerado quando você observa uma destas situações:</p>
              <ul className="mt-3 space-y-2">
                {category.whoNeeds.map((item) => <li key={item} className="flex gap-3 font-body text-15 leading-relaxed text-forest-light"><span className="text-brand">•</span>{item}</li>)}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Sinais e necessidades</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Quando vale a pena avaliar?</h2>
            <p className="mt-3 max-w-3xl font-body text-15 leading-relaxed text-forest-light">Cada imóvel e cobertura tem suas próprias condições. A avaliação ajuda a entender o que está acontecendo e quais opções fazem sentido para o local.</p>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {category.indications.map((item, index) => (
              <AnimateOnScroll key={item.condition} animation="fade-up" delay={index * 0.08}>
                <article className="h-full border border-mist bg-paper p-6">
                  <span className="mb-4 block font-display text-21 text-forest-ink">{item.condition}</span>
                  <p className="font-body text-15 leading-relaxed text-forest-light">{item.explanation}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">O que buscamos</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Um serviço pensado para o seu imóvel</h2>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {category.benefits.map((benefit, index) => (
              <AnimateOnScroll key={benefit} animation="fade-up" delay={index * 0.1}>
                <div className="h-full border border-mist bg-paper-secondary p-6">
                  <span className="mb-3 block font-display text-21 text-forest-ink">{benefit}</span>
                  <p className="font-body text-15 leading-relaxed text-forest-light">A equipe considera as condições do local e conversa com você sobre o escopo mais adequado para este serviço.</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Como funciona</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Etapas do atendimento</h2>
            <p className="mt-3 max-w-3xl font-body text-15 leading-relaxed text-forest-light">O trabalho começa com uma conversa e uma avaliação. Escopo, materiais, prazo e orçamento são alinhados antes da execução.</p>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {category.procedureSteps.map((step, index) => (
              <AnimateOnScroll key={step.stepNumber} animation="fade-up" delay={index * 0.08}>
                <article className="flex h-full gap-5 border border-mist bg-paper p-6">
                  <span className="font-display text-33 text-brand">{String(step.stepNumber).padStart(2, '0')}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-21 text-forest-ink">{step.title}</h3>
                      <span className="font-body text-13 text-forest-light">{step.duration}</span>
                    </div>
                    <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{step.description}</p>
                    <p className="mt-2 font-body text-13 leading-relaxed text-forest-ink/70">{step.clinicalDetails}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Planejamento</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Antes, durante e depois</h2>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {category.recoveryTimeline.map((item, index) => (
              <AnimateOnScroll key={item.period} animation="fade-up" delay={index * 0.1}>
                <article className="h-full border border-mist p-6">
                  <span className="font-body text-13 font-medium uppercase tracking-wider text-brand">Etapa {index + 1}</span>
                  <h3 className="mt-2 font-display text-21 text-forest-ink">{item.period}</h3>
                  <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{item.expectedSensations}</p>
                  <p className="mt-3 border-t border-mist pt-3 font-body text-13 leading-relaxed text-forest-ink/70">{item.careProtocol}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" className="lg:col-span-5">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Orçamento transparente</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Combine cada detalhe antes do serviço</h2>
            <p className="mt-4 font-body text-15 leading-relaxed text-forest-light">{category.costTransparency.note}</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" className="lg:col-span-7">
            <div className="border border-mist bg-paper p-6 md:p-8">
              <p className="font-display text-21 text-forest-ink">{category.costTransparency.baseRange}</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-body text-13 font-semibold uppercase tracking-wider text-brand">O que influencia o orçamento</h3>
                  <ul className="mt-3 space-y-2">{category.costTransparency.factors.map((item) => <li key={item} className="font-body text-15 leading-relaxed text-forest-light">• {item}</li>)}</ul>
                </div>
                <div>
                  <h3 className="font-body text-13 font-semibold uppercase tracking-wider text-brand">O que é alinhado</h3>
                  <ul className="mt-3 space-y-2">{category.costTransparency.whatIsIncluded.map((item) => <li key={item} className="font-body text-15 leading-relaxed text-forest-light">• {item}</li>)}</ul>
                </div>
              </div>
              <Link href="/contact/" className="mt-6 inline-flex font-body text-15 font-medium text-forest-ink underline underline-offset-4 hover:text-brand">Solicitar avaliação e orçamento →</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-5 lg:gap-16">
          <AnimateOnScroll animation="fade-right" className="lg:col-span-2">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Perguntas frequentes</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Dúvidas sobre {category.name.toLowerCase()}</h2>
            <p className="mt-4 font-body text-15 leading-relaxed text-forest-light">A equipe pode explicar as opções para o seu imóvel e orientar os próximos passos.</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" className="lg:col-span-3">
            <Accordion items={category.faqs} />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-forest py-12 text-paper md:py-16">
        <AnimateOnScroll animation="fade-up" className="mx-auto flex max-w-site flex-col justify-between gap-6 px-6 sm:flex-row sm:items-center md:px-12">
          <div>
            <h2 className="font-display text-26 md:text-33">Pronto para falar sobre {category.name.toLowerCase()}?</h2>
            <p className="mt-2 font-body text-15 text-paper/75">Ligue ou visite o G.A Calhas Serralheria e Vidraçaria em Itapevi.</p>
          </div>
          <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="lime" size="lg">Ligar para a equipe</Button>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
