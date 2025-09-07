import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Slider from "../components/Slider/Slider";
import HomeContainer from "../components/Home/HomeContainer";
import { TSlideItem } from "../components/Slider/types";
import { TPost } from "../components/Home/types";

type HomeData = {
  sliders: TSlideItem[];
  posts: TPost[];
  features: TPost[];
  trends: TPost[];
  pages: number;
  page: number;
};

export const getServerSideProps: GetServerSideProps<{
  data: HomeData;
}> = async (context) => {
  const { req, query } = context;
  const page = query.page ? Number(query.page) : 1;

  const host = req?.headers.host ?? "";

  const res = await fetch(`http://${host}/api?page=${page}`);
  const data: HomeData = await res.json();

  return {
    props: { data },
  };
};

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { sliders, posts, features, trends, pages, page } = data;

  return (
    <>
      <Head>
        <title>Modern Blog | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Sport Blog" />
      </Head>

      <div>
        <Slider data={sliders} />
        <HomeContainer
          posts={posts}
          features={features}
          trends={trends}
          pages={pages}
          page={page}
        />
      </div>
    </>
  );
};

export default Home;
