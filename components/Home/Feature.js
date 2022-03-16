import Link from "next/link"
import Heading from "./Heading"

const Feature = ({data = []}) => {

    return (
        <section className="posts mb-0 pt-2 pb-3 brd-top brd-bottom whitesmoke">
            <div className="container pt-3">
                
                <Heading title="Feature Posts" />

                <div className="row">
                    {data.map(({id, title}) => (
                        
                        <div key={id} className="col-lg-3 col-md-6 col-sm-6 co-12 mb-4 pb-1 col-equal">

                            <div className="card">

                                <div className="post-image">
                                    <Link href={`/posts/${id}`}>
                                        <a title={title} className="opacity">
                                            <img 
                                                width={552} 
                                                height={370} 
                                                src={`/assets/images/${id}.jpg`} 
                                                className="img-fluid" 
                                                alt={title} 
                                            />
                                        </a>
                                    </Link>
                                </div>

                                <div className="news-content txt-right" data-title="Hello news title">
                                    <h4 className="post-header">
                                        <Link href={`/posts/${id}`}>
                                            <a className="title-a" title={title}>
                                                {title}
                                            </a>
                                        </Link>
                                    </h4>
                                    
                                    <div className="post-meta">
                                        <span className="author">
                                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                                            3 days ago
                                        </span>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feature
