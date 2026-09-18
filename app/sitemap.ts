import type { MetadataRoute } from 'next';
import { ALL_INDEXABLE_ROUTES, absoluteUrl } from './lib/site';
import { CATALOG_PRODUCTS } from './lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ALL_INDEXABLE_ROUTES.filter((route) => route.index).map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.path === '/product-catalogue'
      ? {
          images: CATALOG_PRODUCTS.map((product) => absoluteUrl(product.image)),
        }
      : {}),
  }));
}
