import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Instalação de calhas',
  description: 'Solicite instalação de calhas em Itapevi com a G.A Calhas Serralheria e Vidraçaria.',
  pathname: '/instalacao-de-calhas/',
});

export default function GutterInstallationPage() {
  return <ProductCategoryPage slug="instalacao-de-calhas" />;
}
