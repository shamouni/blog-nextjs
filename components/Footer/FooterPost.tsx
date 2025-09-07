import Link from "next/link";
import { TPost } from "../Home/types";

interface IFooterPost {
  post: TPost;
}

const FooterPost = ({ post }: IFooterPost) => {
  const { id, title } = post || {};
  const url = "/posts/" + id;

  return (
    <div className="footer-post d-flex mb-3">
      <Link className="col-auto pl-0" href={url}>
        <img
          src={`/assets/images/${id}.jpg`}
          alt={title}
          width={107}
          height={75}
        />
      </Link>
      <div className="text">
        <h5>
          <Link href={url} className="title-a">
            {title}
          </Link>
        </h5>
        <time>7 days ago</time>
      </div>
    </div>
  );
};

export default FooterPost;
