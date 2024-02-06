"use client";

import BlogCard from "@/components/shared/blog-card";
import { BlogsType } from "@/interface/blogs.interface";
// import { calculateTime } from "@/helpers/time.format";
import { BlogsService } from "@/services/blogs.service";
import { useEffect, useState } from "react";

// async function getData() {
//   const res = await BlogsService.getAllBlog();
//   return res;
// }

const BlogPage = () => {
  // const data = await getData();
  const [posts, setPosts] = useState<BlogsType[]>([]);

  useEffect(() => {
    async function fetchBlog() {
      const res = await BlogsService.getAllBlog();
      if (Array.isArray(res.posts)) {
        setPosts(res.posts);
      } else {
        // If res.posts is not an array, you might want to handle this case accordingly
        console.error("Invalid response format: posts is not an array");
      }
    }

    fetchBlog();
  }, []);

  console.log(posts);

  return (
    <div className="md:max-w-[1220px] mx-auto pt-32">
      <div className="flex flex-col space-y-4">
        {posts &&
          posts.map((post: BlogsType) => {
            return <BlogCard key={post.id} post={post} />;
          })}
      </div>
      <div className="right"></div>
    </div>
  );
};

export default BlogPage;
