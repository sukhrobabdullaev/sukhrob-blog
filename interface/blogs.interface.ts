export interface BlogsType {
  createdAt: string;
  date: string;
  excerpt: string;
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  category: {
    label: string;
    slug: string;
  };
  coverImage: {
    id: string;
    url: string;
  };
}
