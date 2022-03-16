import Link from "next/link";

const PostItem = ({ post }) => {

    const { id, title, desc} = post;
    const url = '/posts/' + id;

    return (
        <>
        <div className="post-item row">
            <div className="col-md-4">
                <Link href={url}>
                    <a className="figure">
                        <img src={`/assets/images/${id}.jpg`} className="img-fluid" width="350" alt="" />
                        <div className="labels">
                            <span className="lbl red">sport</span>
                            <span className="lbl green">economic</span>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="col">
                <div className="text">
                    <h5 className="bold">
                        <Link href={url}>
                            <a className="title-a">{title}</a>
                        </Link>
                    </h5>
                    <p>{desc}</p>
                    <time>
                        <i className="fa fa-clock-o mr-2" aria-hidden="true"></i>
                        7 days ago
                    </time>
                </div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default PostItem