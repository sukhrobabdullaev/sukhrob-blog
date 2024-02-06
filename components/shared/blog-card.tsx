import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogsType } from "@/interface/blogs.interface";
import Image from "next/image";

const BlogCard = ({ post }: { post: BlogsType }) => {
  const today: Date = new Date(post.createdAt);

  const day: string = today.getDate().toString().padStart(2, "0");
  const month: string = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(today);
  const year: string = today.getFullYear().toString();

  const formattedDate: string = `${day} ${month}, ${year}`;

  return (
    <div className="px-4">
      <Card key={post.id} className="flex justify-between ">
        <div>
          <CardHeader>
            <CardTitle className="flex flex-col space-y-2">
              <span>{post.title}</span>
              <span>{post.category.label}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span>{formattedDate && formattedDate}</span>
          </CardContent>
        </div>
        <div className="relative md:w-40 md:h-40">
          <Image
            src={post?.coverImage?.url}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
