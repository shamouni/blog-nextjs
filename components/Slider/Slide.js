import Link from "next/link";

const Slide = ({data, box, width, height, k}) => {

    const {id, title, desc, video, category, color} = data;
    const path = '/assets/images/';
    

    return (
        <div className={`carousel-item box box-${box} ${k === 0 ? 'active' : ''}`} key={k}>
            {!video ? (
                <img width={width} height={height} src={`${path}${id}.jpg`} alt={title} /> 
            ) : (
                <video width="100%" height="100%" autoPlay muted loop type="video/mp4" src={`${path}${video}`} />
            )}
            <Link href={`/posts/${id}`}><a className="link"> </a></Link>
            <div className="text">
                <div className="labels">
                    <span className={`lbl ${color}`}>{category}</span>
                </div>
                <h3 className="bold">
                    <Link href={`/posts/${id}`}>
                        <a>{title}</a>
                    </Link>
                </h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Slide
