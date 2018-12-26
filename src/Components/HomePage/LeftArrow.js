import React from 'react';
import { FaChevronLeft } from "react-icons/fa";

const LeftArrow = (props) => {
    return (
    	/*左箭头区域*/
        <div className="backArrow" onClick={props.goToPrevSlide}>
        	<FaChevronLeft />
        </div>

    	)

}

export default LeftArrow;