import Feature from "./Feature";
import PostsList from "./PostsList";
import { TPost } from "./types";

interface IHomeContainerProps {
  posts: TPost[];
  features: TPost[];
  trends: TPost[];
  pages: number;
  page: number;
}

const HomeContainer = (props: IHomeContainerProps) => {
  const { posts, features, trends, pages, page } = props;
  return (
    <>
      <Feature data={features} />
      <PostsList posts={posts} trends={trends} pages={pages} page={page} />
    </>
  );
};

export default HomeContainer;
