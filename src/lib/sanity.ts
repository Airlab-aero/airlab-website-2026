import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export function imageUrl(source: { asset?: { _ref?: string } } | null | undefined): string {
  if (!source?.asset?._ref) return '';
  const ref = source.asset._ref;
  const [, id, dimensions, format] = ref.match(/^image-([a-zA-Z0-9]+)-(\d+x\d+)-(\w+)$/) || [];
  if (!id) return '';
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
}

export const teamQuery = `*[_type == "teamMember"] | order(order asc) { _id, name, role, category, photo, bio, linkedin, order }`;

export const partnersQuery = `*[_type == "partner"] | order(order asc) { _id, name, logo, website, category, order }`;

export const newsListQuery = `*[_type == "newsArticle"] | order(publishedAt desc) { _id, title, slug, publishedAt, category, coverImage, excerpt, externalUrl }`;

export const newsArticleQuery = `*[_type == "newsArticle" && slug.current == $slug][0] { _id, title, slug, publishedAt, category, coverImage, excerpt, body, externalUrl }`;
