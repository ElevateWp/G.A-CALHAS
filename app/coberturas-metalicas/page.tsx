import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Calhas e coberturas metálicas',
  description: 'Serviços de serralheria para calhas e coberturas em Itapevi, São Paulo.',
  pathname: '/coberturas-metalicas/',
});

export default function MetalRoofingPage() {
  return <ProductCategoryPage slug="coberturas-metalicas" />;
}
