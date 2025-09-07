import Heading from "./Heading";
import PostBox from "./PostBox";
import { TPost } from "./types";

interface ISinglePost {
  post: TPost;
  relatedPosts: TPost[];
}

function SinglePost({ post, relatedPosts }: ISinglePost) {
  const { id, title, summary, body } = post;

  return (
    <section className="main detail py-4">
      <div className="container">
        <div className="row">
          <div className="col col-lg-8 col-12">
            <article className="post py-4 px-5">
              <h1>{title}</h1>
              <p className="short-desc">{summary}</p>
              <img
                src={`/assets/images/${id}.jpg`}
                className="img-fluid"
                alt={title}
              />
              <p className="post-text mt-4">{body}</p>
            </article>
          </div>

          <div className="col col-lg-4 d-none d-lg-block">
            <div className="pl-5">
              <Heading title="Related" />
              {relatedPosts?.slice(0, 4).map((i) => (
                <PostBox post={i} key={i.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePost;
