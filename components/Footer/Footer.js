import Heading from "../Home/Heading"
import FooterPost from "./FooterPost"
import dataMock from '../../pages/api/data-mock.json';

const Footer = () => {

    const {posts, trends} = dataMock;

    return (
        <footer id="footer">
            <div className="container py-5 d-none d-lg-block">
                <div className="row">

                    <div className="col">
                        <Heading title="Latest" />
                        {posts.slice(0, 4).map((i, k) => <FooterPost post={i} key={k} />)}
                    </div>

                    <div className="col red">
                        <Heading title="Trends" />
                        {trends.slice(0, 4).map((i, k) => <FooterPost post={i} key={k} />)}
                    </div>

                    <div className="col green">
                        <Heading title="Categories" />
                        <ul className="p-0 m-0">
                            <li className="cat-item">
                                <a href="/posts">Sport</a>
                            </li>
                            <li className="cat-item">
                                <a href="/posts">Economics</a>
                            </li>
                            <li className="cat-item">
                                <a href="/posts">Politics</a>
                            </li>
                            <li className="cat-item">
                                <a href="/posts">Europe</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col yellow">
                        <Heading title="Tags" />
                        <div className="tags">
                            <a href="/posts">Footbal</a>
                            <a href="/posts">Bayern Munich</a>
                            <a href="/posts">Goals</a>
                            <a href="/posts">Top News</a>
                        </div>
                    </div>

                </div>
            </div>

            <div id="footer-bottom">©2022 All Rights Reserved</div>
        </footer>
    )
}

export default Footer
