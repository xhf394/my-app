import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const RightArrow = (props) => {
	//console.log (props.currentIndex);
    return (
    	/*右箭头区域*/
        <div className="nextArrow" onClick={props.goToNextSlide}>
        	<FaChevronRight />
        </div>

    	)

}

export default RightArrow;