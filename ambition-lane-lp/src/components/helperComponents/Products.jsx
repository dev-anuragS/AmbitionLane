import React from 'react'
import text from '../images/text.jpg'
import visual from '../images/visual.jpg'
import cover from '../images/cover.jpg'
import info from '../images/info.jpg'
import linkedin from '../images/linkedin.jpg'
import mock from '../images/mock.jpg'
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
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='carouselImg' src={text} alt="First slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Text Resume</h5>
                            <p>Rs 1999</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={visual} alt="Second slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Visual Resume</h5>
                            <p>Rs 2999</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={cover} alt="Third slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Cover Letter</h5>
                            <p>Rs 999</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={info} alt="Fourth slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Infographic Resume</h5>
                            <p>Rs 4999</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={linkedin} alt="Fifth slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>LinkedIn Profile</h5>
                            <p>Rs 1499</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='carouselImg' src={mock} alt="Sixth slide" />
                        <div className="carousel-caption d-md-block">
                            <h5>Mock Interview</h5>
                            <p>Rs 999</p>
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
