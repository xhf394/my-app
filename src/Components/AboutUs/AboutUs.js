import React from 'react';
import axios from 'axios';
import AboutUsSlider from './AboutUsSlider';
import './AboutUs.css';





class AboutUs extends React.Component {


	constructor(props){
		super(props);
        this.state = {
            /*初始化值*/
            data: [],
            aboutUsSlides: [],
            aboutUsSquares: [],
            aboutUsCurrentIndex: 0,
            aboutUsIntroduction: null,
        }
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
	}

	async componentDidMount(){
        /*获取关于我们页面图片信息*/
		axios.get(`https://www.codeinboxes.com/dyne/index.php/api/imagesmanager/showimagesbylocationwithget?location=aboutus-pic-A`)
        .then(response =>
		this.setState({
            /*将所有图片信息存入*/
            data: response.data,
            /*将图片路径切成三个一组*/
            aboutUsSlides: chunkArray(response.data.slice(), 3),
            /*创建图片路径填充数组*/
            aboutUsSquares: chunkArray(Array(response.data.length).fill(null), 3),
        }))
        .catch(function(error) {
            console.log(error)
        })

      axios.get(`https://www.codeinboxes.com/dyne/index.php/api/labelmanager/getlabelsbylocationwithget?location=aboutus-txt-A`)
        .then(response =>
        this.setState({
            aboutUsIntroduction: response.data[0].label,
        }))
        .catch(function(error) {
            console.log(error)
        })  
    }
        /*左箭头事件向后翻页*/
    goToPrevSlide = () => {
        /*引入当前页面位置及图片数组*/
        const { aboutUsSlides, aboutUsCurrentIndex} = this.state;
        /*设定最后一组图片位置*/
        const lastIndex = aboutUsSlides.length - 1;
        //设定路径重置条件
        const shouldResetIndex = aboutUsCurrentIndex === 0;
        const index = shouldResetIndex ? lastIndex : aboutUsCurrentIndex - 1;
        
        //更新完成后 更新页面路径
        this.setState({
            aboutUsCurrentIndex: index
        })
    }
    
    /*右箭头事件向前翻页*/     
    goToNextSlide = () => {
        //设定路径重置条件 引入当前页面位置及图片数组
        const lastIndex = this.state.aboutUsSlides.length -1;
        const { aboutUsCurrentIndex } = this.state;
        const shouldResetIndex = aboutUsCurrentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : aboutUsCurrentIndex + 1

        console.log(lastIndex);
         
        //更新完成后 更新页面路径
        this.setState({
            aboutUsCurrentIndex: index
        })
    }

	render(){
        /**关于我们页面
        **container 最外层框
        **aboutUs-introduction 公司介绍
        **AboutUsSlider 资质展示图片组 
        **/ 
		return(
            <div className="container">
	            <div className="aboutUs-container">
	                {this.state.aboutUsIntroduction
	                	?
	                	(
				           <div className="aboutUs-introducation text_bg">
				           {this.state.aboutUsIntroduction}</div>
				        )
	                	:
	                    (<div></div>)
	                }
				</div>
				    <AboutUsSlider 
	                    data={this.state.data}
	                    aboutUsSlides={this.state.aboutUsSlides}
	                    aboutUsCurrentIndex={this.state.aboutUsCurrentIndex}
	                    aboutUsSquares={this.state.aboutUsSquares}
	                    goToNextSlide = {this.goToNextSlide}
	                    goToPrevSlide = {this.goToPrevSlide}
	                 />
             </div>
            
            
            
			)
	}
}

export default AboutUs;

/**切割数组函数
@params1 array 需要切割的数组
@params2 number 切割长度
将目标数组按要求长度切割，并返回新数组
**/
function chunkArray(myArray, chunkSize) {
    let result = [];
    while(myArray.length){
        result.push(myArray.splice(0, chunkSize));
    }
    return result;
}

