import Heading from "./Heading";
import Pagination from "./Pagination";
import PostBox from "./PostBox";
import PostItem from "./PostItem";
import { TPost } from "./types";

interface IPostsListProps {
  posts: TPost[];
  trends: TPost[];
  pages: number;
  page: number;
}

const PostsList = (props: IPostsListProps) => {
  const { posts = [], trends = [], pages, page } = props;

  return (
    <section id="posts" className="py-4" data-testid="posts-list">
      <div className="container">
        <div className="row">
          {/* Left column: posts */}
          <div className="col col-lg-8 col-12">
            <Heading title="Latest Posts" />
            {posts.map((post) => (
              <PostItem post={post} key={post.id} />
            ))}
            <Pagination pages={pages} page={page} />
          </div>

          {/* Right column: trends */}
          <div className="col col-lg-4 d-none d-lg-block">
            <div className="pl-5">
              <Heading title="Trends" />
              {trends.map((trend) => (
                <PostBox post={trend} key={trend.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsList;
