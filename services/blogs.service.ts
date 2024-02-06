import { BlogsType } from "@/interface/blogs.interface";
import { request, gql } from "graphql-request";

const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;

export const BlogsService = {
  async getAllBlog() {
    const query = gql`
      query Posts {
        posts {
          createdAt
          date
          excerpt
          id
          publishedAt
          slug
          title
          category {
            label
            slug
          }
          coverImage {
            id
            url
          }
          content {
            text
          }
        }
      }
    `;

    const result = await request<{ posts: BlogsType[] }>(graphAPI, query);
    return result.posts;
  },

  async getDetailedBlog(slug: string) {
    const query = gql`
      query GetDetailedBlog($slug: String!) {
        post(where: { slug: $slug }) {
          id
          excerpt
          title
          slug
          content {
            html
            text
          }
        }
      }
    `;
    const res = await request<{ data: BlogsType }>(graphAPI, query, { slug });
    return res.data;
  },
};
