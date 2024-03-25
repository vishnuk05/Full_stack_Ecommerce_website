import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="d-flex " id="carousel1">
        <div
          id="myCarousel"
          className="carousel slide carousel60"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={5000}>
              <img
                src="https://newsroom-content.rolex.com/-/media/project/rolex/newsroom/rolex/rolex-newsroom-int/2023/day-date/gallery/newsroom-car2023-roller-m128345rbr-0068_2301jva_002.jpg?imwidth=560"
                className="d-block w-100"
                alt="."
                width="500px"
                height={700}
              />
              <div className="container"></div>
            </div>
            <div className="carousel-item" data-bs-interval={1000}>
              <img
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/04/01165527/Oyster-Perpetual-Air-King-40-mm-Oystersteel-1024x607.jpg"
                className="d-block w-100"
                alt="..."
                width="500px"
                height={700}
              />
              <div className="container"></div>
            </div>
            <div className="carousel-item" data-bs-interval={1000}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/56a9e12ac647ad08eb4453c7/1680528697402-97ENGSTFJ78886WRXP1Q/Banner+nouvelties+home+page.jpg?format=2500w"
                className="d-block w-100"
                alt="..."
                width="500px"
                height={700}
              />
              <div className="container"></div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div
          className="container-fluid d-flex flex-column p-2 justify-content-center align-items-center "
          id="part3"
        >
          <p className="heading" style={{fontWeight:"bold" , fontSize:"30px"}}>About us</p>
          <i className="text-center">
            
Infinite Artistry is a premier online art gallery, <br />
 originating from India but welcoming art enthusiasts worldwide to connect with exceptional art and artists.
 <br /> With a seamless browsing and purchasing experience, our platform invites you to explore and acquire artworks and paintings in just a few simple steps.
 Infinite Artistry serves as a dynamic hub for promoting and showcasing high-quality artwork crafted by talented artists from around the globe. <br />
  Whether you're a seasoned collector or an art enthusiast, 
 <br /> we provide a curated selection of artwork to elevate your space and enrich your artistic journey.





          </i>
        </div>
      </div>
      {/* section2 */}
      <div className="d-flex mt-5" id="carousel1">
        <div
          className="container-fluid d-flex flex-column justify-content-center align-items-center "
          id="part3"
        >
          <p className="heading" style={{fontWeight:"bold" , fontSize:"30px"}}>Our vision</p>
          <i className="text-center">
          Infinite Timepieces stands as a premier online luxury watch boutique originating from India
          <br /> yet extending its reach globally to unite timepiece aficionados with exquisite craftsmanship and timeless elegance. 
          <br />
            Our platform offers a streamlined experience for
            <br /> browsing and acquiring luxury watches in just a few straightforward steps.
          </i>
        </div>
        <div
          id="myCarousel"
          className="carousel slide carousel60"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={5000}>
              <img
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/04/12122240/m228236-0012_2201jva_002-v3-1531x900.jpg"
                className="d-block w-100"
                alt="."
                width="1000px"
                height={700}
              />
              <div className="container"></div>
            </div>
            <div className="carousel-item" data-bs-interval={1000}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/56a9e12ac647ad08eb4453c7/1680528697402-97ENGSTFJ78886WRXP1Q/Banner+nouvelties+home+page.jpg?format=2500w"
                className="d-block w-100"
                alt="..."
                width="1000px"
                height={700}
              />
              <div className="container"></div>
            </div>
            <div className="carousel-item" data-bs-interval={1000}>
              <img
                src="https://imgflip.com/s/meme/Cute-Cat.jpg"
                className="d-block w-100"
                alt="..."
                width="1000px"
                height={700}
              />
              <div className="container"></div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
