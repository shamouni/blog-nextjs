import PostsList from "../../components/Home/PostsList"

export const getServerSideProps = async ({query}) => {

    const {page = 1} = query;

    const res = await fetch(`http://localhost:3000/api?page=${page}`);
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
