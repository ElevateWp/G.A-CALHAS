import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Instalação de rufos',
  description: 'Instalação e manutenção de rufos para telhados em Itapevi.',
  pathname: '/instalacao-de-rufos/',
});

export default function RoofFlashingPage() {
  return <ProductCategoryPage slug="instalacao-de-rufos" />;
}
