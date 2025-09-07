import SinglePost from "@/components/Home/SinglePost";

export const getServerSideProps = async (context) => {
  const { req, params } = context;
  const host = req.headers.host;
  let { id } = params;

  if (id > 10) {
    id = Math.ceil(Math.random() * 9) + 1;
  }

  const res = await fetch(`http://${host}/api/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

const Details = ({ data }) => {
  const { post = {}, related = [] } = data;

  return <SinglePost post={post} relatedPosts={related} />;
};

export default Details;
