import React from 'react'
import aboutWhy from '../images/aboutWhy.jpg'
import image1 from '../images/image1.jpg'
import '../css/CarouselCSS.css'

const Carousel = () => {
    return (
        <>
        <div id='carouselContainer'>
        <h1 id='CarouselHeading'>Our Services</h1>
            <div id="carouselExampleIndicator" className="carousel carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicator" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicator" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicator" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='carouselImg' src={image1} alt="First slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Item No 1</h5>
                            <p>Desc No 1</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={image1} alt="Second slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Item No 2</h5>
                            <p>Desc No 2</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={image1} alt="Third slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Item No 3</h5>
                            <p>Desc No 3</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicator" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicator" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        </>
    )
}

export default Carousel
