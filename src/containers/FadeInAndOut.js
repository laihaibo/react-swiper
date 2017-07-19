import React, {Component} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const Fade = ({
  children,
  ...props
}) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames={{
    enter: 'fadeInRight',
    enterActive: 'animated',
    exit: 'fadeOutLeft',
    exitActive: 'animated'
  }}>
    {children}
  </CSSTransition>
);

class FadeInAndOut extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      show: false
    }

    setInterval(() => {
      this.setState({
        show: !this.state.show
      })
    }, 5000)
  }
  render() {
    return (
      <Fade in={this.state.show}>
        <div>Hello world</div>
      </Fade>
    )
  }
}

export default FadeInAndOut;