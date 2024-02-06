import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogsType } from "@/interface/blogs.interface";

const BlogCard = ({ post }: { post: BlogsType }) => {
  const today: Date = new Date();

  const day: string = today.getDate().toString().padStart(2, "0");
  const month: string = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(today);
  const year: string = today.getFullYear().toString();

  const formattedDate: string = `${day} ${month}, ${year}`;

  return (
    <div className="px-4 md:w-3/4 md:mx-auto">
      <Card key={post.id}>
        <CardHeader>
          <CardDescription>{formattedDate && formattedDate}</CardDescription>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default BlogCard;
