import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Reparos de telhado',
  description: 'Avaliação de vazamentos e reparos em telhados pela G.A Calhas em Itapevi.',
  pathname: '/reparos-de-telhado/',
});

export default function RoofRepairPage() {
  return <ProductCategoryPage slug="reparos-de-telhado" />;
}
