import React from 'react';
import "./Slider.css"

const Slide = ({ url }) => {
   // console.log(`${url}`)

    /*定义图片显示区域样式*/
	const styles = {
		/*将图片作为背景显示，路径为变量*/
		backgroundImage: `url(${url})`,
		backgroundSize:'100% 100%',
		backgroundRepeat: 'no-repeat',
//		backgroundPosition: '50% 60%' 
	}
	
	return (
		/** 图片区域
         **slide 将图片作为背景，style 更具图片路径变化
		**/
        <div className="slide" style={styles}></div>
    )
}




export default Slide;
