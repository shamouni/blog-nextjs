import Link from "next/link";

const FooterPost = ({ post = {} }) => {

    const {id, title} = post;
    const url = '/posts/' + id;

    return (
        <div className="footer-post d-flex mb-3">
            <Link href={url}>
                <a className="col-auto pl-0">
                    <img src={`/assets/images/${id}.jpg`} alt={title} width={107} height={75} />
                </a>
            </Link>
            <div className="text">
                <h5>
                    <Link href={url}>
                        <a className="title-a">{title}</a>
                    </Link>
                </h5>
                <time>7 days ago</time>
            </div>
        </div>
    )
}

export default FooterPost
