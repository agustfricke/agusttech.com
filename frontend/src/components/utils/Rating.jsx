import React from 'react'
import {faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";


function Rating({value, text}) {
    return (
        <div className='rating'>
                   { value >= 1
                    ? <FontAwesomeIcon icon={faStar} />
                    : value >= 0.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} />
                        :  <FontAwesomeIcon icon={farStar} />
                    }

            { value >= 2
                    ? <FontAwesomeIcon icon={faStar} />
                    : value >= 1.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} />
                        :  <FontAwesomeIcon icon={farStar} />
                    }

            { value >= 3
                    ? <FontAwesomeIcon icon={faStar} />
                    : value >= 2.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} />
                        :  <FontAwesomeIcon icon={farStar} />
                    }

            { value >= 4
                    ? <FontAwesomeIcon icon={faStar} />
                    : value >= 3.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} />
                        : <FontAwesomeIcon icon={farStar} />
                    }

            { value >= 5
                    ? <FontAwesomeIcon icon={faStar} />
                    : value >= 4.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} />
                            :  <FontAwesomeIcon icon={farStar} />
                    }
            <span>{text && text}</span>
        </div>
        
    )
}

export default Rating
