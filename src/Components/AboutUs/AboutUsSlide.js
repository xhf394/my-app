import React from 'react';
import "./AboutUsSlide.css"

const AboutUsSlide = (props) => {
    //获取当前图片的路径
    const url = props.aboutUsSlide.filepath;
    
    console.log(`${url}`);
    //将路径存入变量，在循环中动态显示

	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize:'100% 100%',
		backgroundRepeat: 'no-repeat',
		
	}
	
	return (
		/**aboutUsSlide 每张图片区域**/
		<div >
		{url ? (<div className="aboutUsSlide " style={styles}></div>) 
	     :(<div></div>)
	    }
        </div>
    )
}




export default AboutUsSlide;
