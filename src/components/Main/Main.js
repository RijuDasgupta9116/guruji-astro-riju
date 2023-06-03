import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div>
          {/* <!-- Main body starts --> */}
    <div className="d-flex flex-column align-items-center main-outer-div container-fluid my-container">
        <img src="https://cdn.pixabay.com/photo/2021/04/19/00/52/sun-6189909_1280.png" alt="" className="main-body-img mt-5"/>
        <div className="d-flex">
            <i className="fa fa-star-o mx-3 margin-top-10" aria-hidden="true"></i>
            <h3>User Testimonial</h3>
            <i className="fa fa-star-o mx-3 margin-top-10" aria-hidden="true"></i>
        </div>

        {/* <!-- Carousal code starts --> */}
        <div id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            {/* <!-- Carousel items --> */}
            <div className="wide-300-px">
                
            


            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" className="d-block w-100 height-570-px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg" className="d-block w-100 height-570-px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://st2.depositphotos.com/3776273/42357/i/600/depositphotos_423571620-stock-photo-close-up-of-beautiful-dreamy.jpg" className="d-block w-100 height-570-px" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>

            </div>
            {/* <!-- Carousel nav --> */}
            
        </div>   
        {/* <!-- Carousal code ends --> */}

        
    </div>
    
    {/* <!-- Main body ends --> */}
    
    
    <img src="add-astrology.png" className="img-add container" alt=""/>

    <div className="astro-outer-div container">

        <div className="d-flex justify-content-center">
            <i className="fa fa-star-o mx-3 margin-top-10" aria-hidden="true"></i>
            <h3 className="margin-top-10">Premium Astrologer</h3>
            <i className="fa fa-star-o mx-3 margin-top-10" aria-hidden="true"></i>
        </div>

        <div className="astro-container mt-5">
            <div className="item-box">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="astro-img"/>
                <h4 className="text-center">Name</h4>
                <div className="d-flex justify-content-between">
                    <div className="left text-center">Chat</div>
                    <div className="right text-center">Call</div>
                </div>
            </div>
            <div className="item-box">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="astro-img"/>
                <h4 className="text-center">Name</h4>
                <div className="d-flex justify-content-between">
                    <div className="left text-center">Chat</div>
                    <div className="right text-center">Call</div>
                </div>
            </div>
            <div className="item-box">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="astro-img"/>
                <h4 className="text-center">Name</h4>
                <div className="d-flex justify-content-between">
                    <div className="left text-center">Chat</div>
                    <div className="right text-center">Call</div>
                </div>
            </div>


        </div>
        <div className="astro-container mt-5">
            <div className="item-box">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="astro-img"/>
                <h4 className="text-center">Name</h4>
                <div className="d-flex justify-content-between">
                    <div className="left text-center">Chat</div>
                    <div className="right text-center">Call</div>
                </div>
            </div>
            <div className="item-box">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="astro-img"/>
                <h4 className="text-center">Name</h4>
                <div className="d-flex justify-content-between">
                    <div className="left text-center">Chat</div>
                    <div className="right text-center">Call</div>
                </div>
            </div>
            <div className="item-box">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="astro-img"/>
                <h4 className="text-center">Name</h4>
                <div className="d-flex justify-content-between">
                    <div className="left text-center">Chat</div>
                    <div className="right text-center">Call</div>
                </div>
            </div>


        </div>
        <div className="astro-container mt-5">
            <div className="item-box">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="astro-img"/>
                <h4 className="text-center">Name</h4>
                <div className="d-flex justify-content-between">
                    <div className="left text-center">Chat</div>
                    <div className="right text-center">Call</div>
                </div>
            </div>
            <div className="item-box">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="astro-img"/>
                <h4 className="text-center">Name</h4>
                <div className="d-flex justify-content-between">
                    <div className="left text-center">Chat</div>
                    <div className="right text-center">Call</div>
                </div>
            </div>
            <div className="item-box">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="astro-img"/>
                <h4 className="text-center">Name</h4>
                <div className="d-flex justify-content-between">
                    <div className="left text-center">Chat</div>
                    <div className="right text-center">Call</div>
                </div>
            </div>


        </div>

    </div>
    </div>
  )
}
