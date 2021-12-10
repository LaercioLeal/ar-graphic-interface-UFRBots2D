import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

function Container({ children, htmlElement, ...props }) {
  return htmlElement === 'div' ? (
    <S.Div data-testid="container-div" {...props}>
      {children}
    </S.Div>
  ) : (
    <S.Section data-testid="container-section" {...props}>
      {children}
    </S.Section>
  )
}

Container.defaultProps = {
  htmlElement: 'section',
}

Container.propTypes = {
  htmlElement: PropTypes.oneOf(['section', 'div']),
}

export default Container
