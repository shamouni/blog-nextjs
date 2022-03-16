import Heading from "../../components/Home/Heading"
import PostBox from "../../components/Home/PostBox"

export const getServerSideProps = async (context) => {

    let {id} = context.params;
    
    if(id > 10) {
        id = Math.ceil(Math.random() * 9) + 1;
    }

    const res = await fetch('http://localhost:3000/api/' + id);
    const data = await res.json();

    return {
        props: { data }
    }
}


const Details = ({ data }) => {

    const { post = {}, related = [] } = data;
    const { id, title, summary, body } = post;

    return (
        <section className='main detail py-4'>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <article className="post py-4 px-5">
                            <h1>{title}</h1>
                            <p className="short-desc">
                                {summary}
                            </p>
                            <img src={`/assets/images/${id}.jpg`} className="img-fluid" alt={title} />
                            <p className="post-text mt-4">
                                {body}
                            </p>
                        </article>
                    </div>

                    <div className="col col-lg-4 d-none d-lg-block">
                        <div className='pl-5'>
                            <Heading title="Related" />
                            {related.slice(0, 4).map(i => <PostBox post={i} key={i.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details
