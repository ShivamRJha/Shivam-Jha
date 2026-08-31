import type { MetadataRoute } from 'next';import { projects } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {const base=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';return [{url:base,lastModified:new Date()},{url:`${base}/admin`,lastModified:new Date()},...projects.map(p=>({url:`${base}/projects/${p.slug}`,lastModified:new Date()}))]}
