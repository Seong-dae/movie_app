import React from 'react';
import PropTypes from 'prop-types'

//state를 안쓰면 굳이 class로 안만들고 function으로 만들어줘도댐
function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;