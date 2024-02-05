import BlogCard from "@/components/shared/blog-card";
import { calculateTime } from "@/helpers/time.format";
import { BlogsService } from "@/services/blogs.service";

async function getData() {
  const res = await BlogsService.getAllBlog();
  return res;
}

const BlogPage = async () => {
  const data = await getData();
  console.log(data.posts);

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
