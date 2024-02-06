import BlogCard from "@/components/shared/blog-card";
import { BlogsType } from "@/interface/blogs.interface";
// import { calculateTime } from "@/helpers/time.format";
import { BlogsService } from "@/services/blogs.service";

async function getData() {
  try {
    const res = await BlogsService.getAllBlog();
    console.log("Response from API:", res); // Check the response format
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
}

const BlogPage = async () => {
  const data = await getData();

  return (
    <div className="md:max-w-[1220px] mx-auto pt-32">
      <div className="flex flex-col space-y-4">
        {data &&
          data.map((post: BlogsType) => {
            return <BlogCard key={post.id} post={post} />;
          })}
      </div>
      <div className="right"></div>
    </div>
  );
};

export default BlogPage;
