import PostsList from "../../components/Home/PostsList"

export const getServerSideProps = async (context) => {

    const { req, query } = context;
    const {page = 1} = query;

    const host = req ? req.headers.host : '';

    const res = await fetch(`http://${host}/api?page=${page}`);
    const data = await res.json();

    return {
        props: { data }
    }
}

const Posts = ({data}) => {

    const {posts = [], trends = [], pages, page} = data;
    

    return (
        <PostsList 
            posts={posts} 
            trends={trends} 
            pages={pages} 
            page={page} 
        />
    )
}

export default Posts
