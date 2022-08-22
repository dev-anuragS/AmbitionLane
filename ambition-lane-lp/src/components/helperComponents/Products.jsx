import React from 'react'
import image1 from '../images/image1.jpg'
import '../css/CarouselCSS.css'

const Products = () => {
    return (
        <>
        <div id='carouselContainer'>
        <h1 id='CarouselHeading'>Our Products</h1>
            <div id="carouselExampleIndicators" className="carousel carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='carouselImg' src={image1} alt="First slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Text Resume</h5>
                            <p>Rs 1800</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={image1} alt="Second slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Visual Resume</h5>
                            <p>Rs 3000</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={image1} alt="Third slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Cover Letter</h5>
                            <p>Rs 1500</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* <h1 id='CarouselHeading'>Our Products</h1> */}
        </div>
        </>
    )
}

export default Products
