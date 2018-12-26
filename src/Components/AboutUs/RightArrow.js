import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const RightArrow = (props) => {
	
    return (
        /**nextArrow向右箭头**/
        <div className="aboutus-nextArrow" onClick={props.goToNextSlide}>
        	<FaChevronRight />
        </div>

    	)

}

export default RightArrow;