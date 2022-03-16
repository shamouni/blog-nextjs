import Slide from "./Slide";

const SlideItems = ({items = [], order, box = "small"}) => {

    const id = box + '-' + order;
    const width = box === 'small' ? 575 : 960;
    const height = box === 'small' ? 374 : 615;
    const cls = box === 'small' ? 'vert slider-vertical' : '';


    return (
        <div id={id} className={`carousel slide ${cls}`} data-order={order} data-interval="3000">
            <div className="carousel-inner" role="listbox">
                {items.map((i, k) => <Slide data={i} box={box} width={width} height={height} k={k} key={i.id} />)}
            </div>

            <a className="control control-left" href={`#${id}`} data-slide="prev">
                <span className="fa fa-angle-left"></span>
            </a>
            <a className="control control-right" href={`#${id}`} data-slide="next">
                <span className="fa fa-angle-right"></span>
            </a>

            <ol className="carousel-indicators">
                {items.map((i, k) => (
                    <li 
                        key={k} 
                        data-target={`#${i.id}`} 
                        data-slide-to={k} 
                        className={k == 0 ? 'active' : ''}>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default SlideItems
