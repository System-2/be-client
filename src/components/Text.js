import React from 'react'
import PropTypes from 'prop-types'

const Text = ({view, text_ru, text_en}) => (
    <span
        text_ru={text_ru}
        text_en={text_en}
    >
        {view}
    </span>
)

Text.propTypes = {
    text_ru: PropTypes.string.isRequired,
    text_en: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired
}

export default Text