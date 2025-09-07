import Link from "next/link";
import { TPost } from "./types";

interface IPostItemProps {
  post: TPost;
}

const PostItem = ({ post }: IPostItemProps) => {
  const { id, title, desc } = post;
  const url = `/posts/${id}`;

  return (
    <>
      <div className="post-item row">
        {/* post image */}
        <div className="col-md-4">
          <Link href={url} className="figure">
            <img
              src={`/assets/images/${id}.jpg`}
              className="img-fluid"
              width={350}
              alt={title}
              loading="lazy"
            />
            <div className="labels">
              <span className="lbl red">sport</span>
              <span className="lbl green">economic</span>
            </div>
          </Link>
        </div>

        {/* post text */}
        <div className="col">
          <div className="text">
            <h5 className="bold">
              <Link href={url} className="title-a">
                {title}
              </Link>
            </h5>
            <p>{desc}</p>
            <time>
              <i className="fa fa-clock-o mr-2" aria-hidden="true"></i>7 days
              ago
            </time>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default PostItem;
