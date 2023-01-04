import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {no: 0}

  next = () => {
    const {reviewsList} = this.props

    const {no} = this.state

    let updateno
    if (no < reviewsList.length - 1) {
      updateno = no + 1
      this.setState({no: updateno})
    } else {
      updateno = no
    }
  }

  previous = () => {
    const {no} = this.state

    let updateno
    if (no > 0) {
      updateno = no - 1
      this.setState({no: updateno})
    } else {
      updateno = no
    }
  }

  render() {
    const {no} = this.state

    console.log(no)

    const {reviewsList} = this.props

    const carousel = reviewsList[no]

    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="heading">Reviews</h1>
          <div className="carouselContainer">
            <button
              data-testid="leftArrow"
              className="button"
              type="button"
              onClick={this.previous}
            >
              <img
                className="arrow"
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <div className="carousel">
              <img
                className="img"
                src={carousel.imgUrl}
                alt={carousel.username}
              />
              <p className="name">{carousel.username}</p>
              <p className="company">{carousel.companyName}</p>
              <p className="description">{carousel.description}</p>
            </div>
            <button
              className="button"
              data-testid="rightArrow"
              type="button"
              onClick={this.next}
            >
              <img
                className="arrow"
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
