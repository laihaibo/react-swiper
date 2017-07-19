import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const Fade = ({
  children,
  ...props
}) => (
  <CSSTransition {...props} timeout={500}>
    {children}
  </CSSTransition>
);

export default Fade;