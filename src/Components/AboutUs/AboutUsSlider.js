import React from 'react';
import AboutUsSlide from './AboutUsSlide';
import './AboutUsSlider.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class aboutUsSlider extends React.Component {

    /**图片棋盘中单个方块包含三张图片**/
    renderAboutUsSlide(i) {
        //设置当前方块路径
        const currentAboutUsSquares = this.props.aboutUsSlides[this.props.aboutUsCurrentIndex];
        //获得当前方块对应所有信息
        const aboutUsSlide = currentAboutUsSquares[i];
        console.log( currentAboutUsSquares);

    	return(
        /**渲染图片数组
        **首先通过当前数组路径获取切割后新数组位置
        **通过循环中的i值获取对应单个图片信息完成渲染
        **/
    		<div key={i}>
    	    { aboutUsSlide ? 
               (<AboutUsSlide 
                  key={i}
                  index={i}
                  aboutUsSlide={aboutUsSlide}
                />)
               :
               (<div></div>)
             }
             </div>
         )
    } 

    render(){
        //对填充数组路径进行浅备份
        const aboutUsSquares = this.props.aboutUsSquares.slice();
        
        //对关于我们类信息浅备份
        //const aboutUsData = this.props.data.slice();

        //获取图片数组
        //const aboutUsSlides= this.props.aboutUsSlides;
        
        //获取当前路径位置
        const index = this.props.aboutUsCurrentIndex;
        
        //获取当前路径的填充数组路径
        const aboutUsSlideRow = aboutUsSquares[index];


    	return(
        /**关于我们资质图片区域渲染
         **aboutUsSlider 整个区域
         ** aboutUsSlider-wrapper 图片部分
         **LeftArrow 左箭头
         **RightArrow 右箭头
        **/

    		<div className="aboutUsSlider">
                <div className="aboutUsSlider-wrapper text_bg">
                    {aboutUsSlideRow ? 
                    (aboutUsSlideRow.map((column, columnIndex) => {
                        return(
                       			this.renderAboutUsSlide(columnIndex)
                       			)
                    })) 
                    : 
                    (<div></div>)}                                         
                </div>
                
                <LeftArrow 
                    goToPrevSlide={this.props.goToPrevSlide}
                    aboutUsCurrentIndex={this.props.aboutUsCurrentIndex}
                />
                
                <RightArrow 
                    goToNextSlide={this.props.goToNextSlide}
                    aboutUsCurrentIndex = {this.props.aboutUsCurrentIndex} 
                />
        </div>
    	)
    }
}

export default aboutUsSlider;


/**切割数组函数
@params1 array 需要切割的数组
@params2 number 切割长度
将目标数组按要求长度切割，并返回新数组
**/
// function chunkArray(myArray, chunkSize) {
//     let result = [];

//     while(myArray.length){
//         result.push(myArray.splice(0, chunkSize));
//     }

//     return result;
// }