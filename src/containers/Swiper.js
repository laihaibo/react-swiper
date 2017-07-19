import React, {Component} from 'react';
// import CSSTransition from 'react-transition-group/CSSTransition';
import data from '../static/data';
import Figure from '../components/Figure';
import Fade from '../components/Fade';
import '../static/css/swiper.css';

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: data[5],
      data,
      animate: {},
      show: false
    };
    this.onPrev = this
      .onPrev
      .bind(this);
    this.onNext = this
      .onNext
      .bind(this);
    this.onSetCurrent = this
      .onSetCurrent
      .bind(this);
  }

  onPrev() {
    let current = this.state.current;
    let currentIndex = this
      .state
      .data
      .map((obj, index) => ({
        ...obj,
        index
      }))
      .filter(obj => obj.id === current.id)[0]
      .index;
    let prevIndex = currentIndex === 0
      ? this.state.data.length - 1
      : --currentIndex;

    this.setState((prevState) => ({
      current: prevState.data[prevIndex],
      show: !prevState.show,
      animate: {
        appear: 'animated',
        appearActive: 'flip',
        enter: 'animated',
        enterActive: 'fadeInLeft',
        exit: 'animated',
        exitActive: 'fadeOutRight'
      }
    }));
  }

  onNext() {
    let current = this.state.current;
    let currentIndex = this
      .state
      .data
      .map((obj, index) => ({
        ...obj,
        index
      }))
      .filter(obj => obj.id === current.id)[0]
      .index;
    let nextIndex = currentIndex === this.state.data.length - 1
      ? 0
      : ++currentIndex;

    this.setState((prevState) => ({
      current: prevState.data[nextIndex],
      show: !prevState.show,
      animate: {
        appear: 'animated',
        appearActive: 'flip',
        enter: 'animated',
        enterActive: 'fadeInRight',
        exit: 'animated',
        exitActive: 'fadeOutLeft'
      }
    }));
  }

  onSetCurrent(id) {
    this.setState((prevState) => ({
      current: prevState.data[id],
      show: !prevState.show,
      animate: {
        appear: 'animated',
        appearActive: 'flip',
        enter: 'animated',
        enterActive: 'fadeInRight',
        exit: 'animated',
        exitActive: 'fadeOutLeft'
      }
    }));
  }

  render() {
    return (
      <div className="swiper">
        <div className="control-left" onClick={this.onPrev}>prev</div>
        <div className="rollbar">
          <Fade in={this.state.show} classNames={this.state.animate}>
            <Figure {...this.state.current}/>
          </Fade>
          <div className="ballbar">
            {this
              .state
              .data
              .map(ball => <div
                style={{
                background: ball.id === this.state.current.id
                  ? 'red'
                  : '#ccc'
              }}
                onClick={() => this.onSetCurrent(ball.id)}
                className="ball"
                key={ball.id}/>)}
          </div>
        </div>
        <div className="control-right" onClick={this.onNext}>next</div>
      </div>
    );
  }
}

export default Swiper;