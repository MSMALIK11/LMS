import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Category = () => {
    return (
      <div>
        <div className="content d-md-none d-sm-none d-sm-block d-lg-block">
          <h1>category</h1>
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle fs-3"
              type="button"
              title="Trending"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All category
            </button>
            <ul
              className="dropdown-menu "
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Newest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Populer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Free
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Premium
                </a>
              </li>
            </ul>
          </div>

          <h2>Skill level</h2>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label " htmlFor="flexRadioDefault1">
              beginner (25)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Entermidate (25)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Expert (20)
            </label>
          </div>
          {/* skill end  */}
          {/* rating start */}
          <div className="course-rating">
            <h2>Course rating</h2>

            <div className="form-check my-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning me1" />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-11"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-1"
                  />
                </span>
                (25)
              </label>
            </div>
            <div className="form-check my-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning me1" />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-11"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-warning me-1"
                  />
                </span>
                (25)
              </label>
            </div>
            <div className="form-check my-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning me1" />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-11"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-warning me-1"
                  />
                </span>
                (20)
              </label>
            </div>
            <div className="form-check my-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning me1" />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-11"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-warning me-1"
                  />
                </span>
                (20)
              </label>
            </div>
            <div className="form-check my-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning me1" />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning me-11"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-warning me-1"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-warning me-1"
                  />
                </span>
                (20)
              </label>
            </div>
            {/* course type  */}
            <section>
              <h2>Course type</h2>
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                  
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Free (1000)
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Premium (120)
                </label>
              </div>
            </section>
            {/* duration  */}
            <section>
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  +5 Hourse (120)
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  +10 Hourse (120)
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  +20 Hourse (120)
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  +30 Hourse (120)
                </label>
              </div>
            </section>
          </div>

          {/* contetn end here */}
        </div>
      </div>
    );
}

export default Category
