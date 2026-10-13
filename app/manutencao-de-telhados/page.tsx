import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Manutenção de telhados',
  description: 'Avaliação e manutenção de telhados e coberturas em Itapevi pela G.A Calhas.',
  pathname: '/manutencao-de-telhados/',
});

export default function RoofMaintenancePage() {
  return <ProductCategoryPage slug="manutencao-de-telhados" />;
}
