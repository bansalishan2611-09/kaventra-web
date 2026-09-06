import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kaventraweb.vercel.app'
  
  // List of all valid routes in your Next.js app directory
  const routes = [
    '',
    '/about',
    '/careers',
    '/contact',
    '/director',
    '/documentation',
    '/ecosystem',
    '/mission',
    '/privacy',
    '/story',
    '/terms',
    '/updates',
    '/values',
    '/ventures',
    '/vision'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
