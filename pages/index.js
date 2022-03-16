import Head from "next/head";
import Slider from "../components/Slider/Slider";
import HomeContainer from '../components/Home/HomeContainer';


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

const Home = ({data = {}}) => {

    const {sliders, posts, features, trends, pages, page} = data;

    return (
        <>
        <Head>
            <title>Modern Blog | Home</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Sport Blog" />
        </Head>
        <div>
            <Slider data={sliders} />
            <HomeContainer 
                posts={posts} 
                features={features} 
                trends={trends} 
                pages={pages} 
                page={page}
            />
        </div>
        </>
    )
}

export default Home
