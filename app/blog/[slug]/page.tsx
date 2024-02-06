import { BlogsType } from "@/interface/blogs.interface";
import { BlogsService } from "@/services/blogs.service";

async function getData(slug: string) {
  try {
    const detailedBlog = await BlogsService.getDetailedBlog(slug);
    console.log("Detailed Blog Data:", detailedBlog);
    return detailedBlog;
  } catch (error) {
    console.error("Error fetching detailed blog:", error);
    return null;
  }
}

const BlogDetailedPage = async ({ params }: { params: BlogsType }) => {
  const data = await getData(params.slug);

  return (
    <div>
      <span>{data?.excerpt}</span>
      <div dangerouslySetInnerHTML={{ __html: `${data?.content?.html}` }}></div>
    </div>
  );
};

export default BlogDetailedPage;
