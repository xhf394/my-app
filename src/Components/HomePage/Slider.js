import React from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import './Slider.css';

class Slider extends React.Component {

    render(){
      /*从父组件获取图片路径数组*/
    	//const homePageSlides = this.props.homePageSlides;
      // console.log(homePageSlides);
      //console.log(this.props.currentIndex);
        
    	return(
        /**轮播图区域 包含图片 左箭头 右箭头
         **slider 整个轮播图区域
         **slider-wrapper 图片显示区域
         **LeftArrow 左箭头
         **RightArrow 右箭头
        **/
          <div className="slider">
            <div className="slider-wrapper">
              <Slide
                url = {this.props.homePageSlides[this.props.currentIndex]}
              />
            </div>    	
                    	                  	
            <LeftArrow 
              goToPrevSlide={this.props.goToPrevSlide}
              currentIndex={this.props.currentIndex}
            />
                
            <RightArrow 
              goToNextSlide={this.props.goToNextSlide}
              currentIndex = {this.props.currentIndex} 
            />
          </div>
    		)
    }



}

export default Slider;
