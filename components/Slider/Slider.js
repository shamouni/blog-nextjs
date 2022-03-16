
import SlideItems from "./SlideItems";

const Slider = ({data = []}) => {

    let larges = data.filter(i => i.box === 'large');
    let smalls_1 = data.filter(i => i.box === 'small-1');
    let smalls_2 = data.filter(i => i.box === 'small-2');
    let smalls_3 = data.filter(i => i.box === 'small-3');
    let smalls_4 = data.filter(i => i.box === 'small-4');
    

    return (
        <div id="slider" className="slider slider-modern box-5-left box5-right modern_slider border-yes brd-5 brd-light">
            <div className="container-fluid px-0">
                <div className="row">
                    
                    <div className="col box-large col-lg-6 col-md-12 col-sm-12 col-12 brd-bottom-sm">
                        <SlideItems items={larges} order={1} box="large" />
                    </div>
        
                    <div className="col col-small col-lg-6 col-md-12 col-sm-12 col-12 brd-left">
                        <div className="row no-gutters">
                            <div className="col col-md-6 col-sm-6 col-6 col-12 h-50 brd-right brd-right-sm brd-bottom brd-bottom-sm">
                                <SlideItems items={smalls_1} order={2} />
                            </div>
                            <div className="col col-md-6 col-sm-6 col-12 h-50 brd-bottom brd-bottom-sm">
                                <SlideItems items={smalls_2} order={3} />
                            </div>
                            <div className="col col-md-6 col-sm-6 col-6 col-12 h-50 brd-right brd-right-sm brd-bottom-sm">
                                <SlideItems items={smalls_3} order={4} />
                            </div>
                            <div className="col col-md-6 col-sm-6 col-6 col-12 h-50 brd-bottom-sm">
                                <SlideItems items={smalls_4} order={5} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Slider
