import BlogCard from "@/components/shared/blog-card";
import { BlogsType } from "@/interface/blogs.interface";
import { BlogsService } from "@/services/blogs.service";

function getData() {
  try {
    const res = BlogsService.getAllBlog();
    console.log("Response from API:", res);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const BlogPage = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="md:max-w-[1220px] mx-auto pt-32 flex gap-10">
      <div className="flex flex-col space-y-4 w-3/4">
        {data &&
          data.map((post: BlogsType) => {
            return <BlogCard key={post.id} post={post} />;
          })}
      </div>
      <div className="">latest</div>
    </div>
  );
};

export default BlogPage;
