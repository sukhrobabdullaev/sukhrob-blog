import BlogCard from "@/components/shared/blog-card";
import React from "react";

const BlogPage = () => {
  return (
    <div className="md:max-w-[1220px] mx-auto pt-32">
      <div className="flex flex-col space-y-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default BlogPage;
