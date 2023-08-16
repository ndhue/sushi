import React from 'react'
import sushi12 from "../assets/sushi-12.png"
import sushi11 from "../assets/sushi-11.png"
import sushi10 from "../assets/sushi-10.png"
import sushi9 from "../assets/sushi-9.png"
import sushi8 from "../assets/sushi-8.png"
import sushi7 from "../assets/sushi-7.png"
import sushi6 from "../assets/sushi-6.png"
import star from "../assets/star.svg"
import arrowRight from "../assets/arrow-right.svg"

export const Popular = () => {
  return (
    <section className="popular-foods" id="menu">
      <h2 className="popular-foods__title">
        Popular Food / 人気
      </h2>

      <div className="popular-foods__filters sushi__hide-scrollbar">
        <button className="popular-foods__filter-btn active">
          All
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushi9} alt="sushi 9" />
          Sushi
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushi8} alt="sushi 8" />
          Ramen
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushi7} alt="sushi 7" />
          Udon
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushi6} alt="sushi 6" />
          Danggo
        </button>
        <button className="popular-foods__filter-btn">
          All
        </button>
      </div>

      <div className="popular-foods__catalogue">
        <article className="popular-foods__card">
          <img className="popular-foods__card-image" src={sushi12} alt="sushi-12" />
          <h4 className="popular-foods__card-title">
            Chezu Sushi
          </h4>
          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              <img src={star} alt="star" />
              <p>4.9</p>
            </div>
            <p className="popular-foods__card-price">$21.00</p>
          </div>
        </article>
        <article className="popular-foods__card active-card">
          <img className="popular-foods__card-image" src={sushi11} alt="sushi-11" />
          <h4 className="popular-foods__card-title">
            Original Sushi
          </h4>
          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              <img src={star} alt="star" />
              <p>5.0</p>
            </div>
            <p className="popular-foods__card-price">$19.00</p>
          </div>
        </article>
        <article className="popular-foods__card">
          <img className="popular-foods__card-image" src={sushi10} alt="sushi-10" />
          <h4 className="popular-foods__card-title">
            Ramen Legendo
          </h4>
          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              <img src={star} alt="star" />
              <p>4.7</p>
            </div>
            <p className="popular-foods__card-price">$13.00</p>
          </div>
        </article>
      </div>
      <button className="popular-foods__button">
        Explore Food
        <img src={arrowRight} alt="arrow-right" />
      </button>
    </section>

  )
}
