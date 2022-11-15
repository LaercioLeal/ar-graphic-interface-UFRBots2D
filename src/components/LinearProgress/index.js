import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

function LinearProgress({ onTop, position, ...props }) {
  return (
    <S.Container
      onTop={onTop}
      position={position}
      data-testid="linear-progress"
      {...props}
    />
  )
}

LinearProgress.propTypes = {
  onTop: PropTypes.bool,
  position: PropTypes.oneOf(['fixed', 'absolute', 'static']),
}

export default LinearProgress
