import React from "react";
import img from "../images/react.jpeg";
// import "../styles/courseCarousel/carousel.scss";
import Card from "../component/Card";
import CourseCard from "./CourseCard";
const CourseSlider = () => {
  return (
    <section className="slider-wraper">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            {/* <img src={img} class="d-block w-100" alt="..." /> */}
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="">
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">ReactJS development</h2>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquid, eveniet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="">
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">ReactJS development</h2>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquid, eveniet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="">
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">ReactJS development</h2>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquid, eveniet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            {/* <img src={img} class="d-block w-100" alt="..." /> */}
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="">
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">ReactJS development</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="">
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">ReactJS development</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="">
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">ReactJS development</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-button">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span>
              <i class="bi bi-arrow-left-circle-fill"></i>
            </span>{" "}
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span>
              <i class="bi bi-arrow-right-circle-fill"></i>
            </span>{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSlider;
