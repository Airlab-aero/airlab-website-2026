import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: r => r.required() }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'date', validation: r => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string',
      options: { list: ['Partnership', 'Research', 'Event', 'Award', 'Technology', 'Announcement'] } }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'externalUrl', title: 'External URL (if press release)', type: 'url' }),
  ],
  orderings: [{ title: 'Newest First', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
