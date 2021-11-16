import React from 'react'
import aboutWhy from './images/aboutWhy.jpg'
import './css/CarouselCSS.css'

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
                        <img className='carouselImg' src={aboutWhy} alt="First slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Item No 1</h5>
                            <p>Desc No 1</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={aboutWhy} alt="Second slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Item No 2</h5>
                            <p>Desc No 2</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={aboutWhy} alt="Third slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Item No 3</h5>
                            <p>Desc No 3</p>
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
