const FooterPost = ({ post = {} }) => {

    const {id, title} = post;

    return (
        <div className="footer-post d-flex mb-3">
            <a className="col-auto pl-0" href="#!">
                <img src={`/assets/images/${id}.jpg`} alt={title} width={107} height={75} />
            </a>
            <div className="text">
                <h5><a className="title-a" href="#!">{title}</a></h5>
                <time>7 days ago</time>
            </div>
        </div>
    )
}

export default FooterPost
