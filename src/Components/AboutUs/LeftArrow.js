import React from 'react';
import { FaChevronLeft } from "react-icons/fa";

const LeftArrow = (props) => {
    return (
    	/**backArrow 向左箭头**/
        <div className="aboutus-backArrow" onClick={props.goToPrevSlide}>
        	<FaChevronLeft />
        </div>

    	)

}

export default LeftArrow;