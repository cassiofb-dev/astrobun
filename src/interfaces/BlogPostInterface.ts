interface BlogPostInterface {
  slug: string,
  title: string,
  description: string,
  publicationDate: Date,
  updatedDate?: Date,
  heroImage?: string,
  authors?: string[],
  tags?: string[],
}
