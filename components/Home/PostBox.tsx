import Link from "next/link";
import { TPost } from "./types";

interface IPostBoxProps {
  post: TPost;
}

const PostBox = ({ post }: IPostBoxProps) => {
  const { id, title } = post;

  return (
    <div className="posts-sidebar row">
      <div className="col-12 mb-4">
        <Link href={`/posts/${id}`} className="post-box">
          <img
            className="img-fluid"
            src={`/assets/images/${id}.jpg`}
            alt={title}
            loading="lazy"
            width={300}
            height={200}
          />
          <div className="text">
            <h5 className="title-a">{title}</h5>
            <time>5 days ago</time>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostBox;
