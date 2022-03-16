import Feature from "./Feature"
import PostsList from "./PostsList"

const HomeContainer = ({ posts, features, trends, pages, page }) => {

    return (
        <>
        <Feature data={features} />
        <PostsList posts={posts} trends={trends} pages={pages} page={page} />
        </>
        
    )
}

export default HomeContainer
