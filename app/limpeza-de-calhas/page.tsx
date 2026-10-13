import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Limpeza de calhas',
  description: 'Serviço de limpeza de calhas em Itapevi pela G.A Calhas Serralheria e Vidraçaria.',
  pathname: '/limpeza-de-calhas/',
});

export default function GutterCleaningPage() {
  return <ProductCategoryPage slug="limpeza-de-calhas" />;
}
