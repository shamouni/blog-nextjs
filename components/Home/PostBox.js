import Link from "next/link";

const PostBox = ( {post = {} }) => {

    const {id, title} = post;

    return (
        <div className="posts-sidebar row">
            <div className="col-12 mb-4">
                <Link href={`/posts/${id}`}>
                    <a className="post-box">
                        <img className="img-fluid" src={`/assets/images/${id}.jpg`} alt={title} />
                        <div className="text">
                            <h5 className="title-a">{title}</h5>
                            <time>5 days ago</time>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default PostBox
