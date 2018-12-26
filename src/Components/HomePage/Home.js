import React from 'react';
import Slider from'./Slider';
import './Home.css';
import axios from 'axios';

class Home extends React.Component {
	constructor(props){
		super(props);
        /*初始化*/
		this.state = {
            homePageSlides: [],
            currentIndex: 0,
            weixinFilePath: [],
            weixinFileArray: []
		}

        /*绑定左右箭头事件*/
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
	}


    componentDidMount(){
      
      /*获取主页图片*/     
      axios.get(`https://www.codeinboxes.com/dyne/index.php/api/imagesmanager/showimagesbylocationwithget?location=index-pic-A`)
        .then(response =>
          //更新主页图片路径数组
          this.setState({
            homePageSlides: response.data.map(res=> res.filepath)
          }))
        .catch(function(error) {
            console.log(error)
        }) 
      

      /*获取主页二维码*/
      axios.get(`https://www.codeinboxes.com/dyne/index.php/api/imagesmanager/showimagesbylocationwithget?location=index-pic-B`)
        .then(response =>
          this.setState({
            //更新主页二维码数组
            weixinFilePath: response.data.map(res => res.filepath),
            weixinFileArray: Array(response.data.length).fill(null)
          }))
        .catch(function(error) {
            console.log(error)
        })

        this.myInterval = setInterval(() => {
            //获取最后一张图片位置
            const lastIndex = this.state.homePageSlides.length -1;
            //获取当下展示页面位置
            const { currentIndex } = this.state;

            //控制下一个图片位置
            //重置或直接下一张
            const shouldResetIndex = currentIndex === lastIndex;
            const index = shouldResetIndex ? 0 : currentIndex + 1;

            //更新当前位置 完成更新
            this.setState({
                currentIndex: index            
            })
        }, 6000)      
    	}

    componentWillUnmount () {
        clearInterval(this.myInterval)
    }    
    
    /*主页轮播图左箭头控制*/
    goToPrevSlide = () => {
        //获取主页图片路径数组及当前位置
    	const { homePageSlides, currentIndex} = this.state;
        
        //获取最后一张图片位置
        const lastIndex = homePageSlides.length - 1;

        //控制下一个图片位置
        //重置或直接下一张
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        
        //更新当前位置完成更新
        this.setState({
        	currentIndex: index
        })
    }

    /*主页轮播图右箭头控制*/
    goToNextSlide = () => {
        //获取最后一张图片位置
        const lastIndex = this.state.homePageSlides.length -1;
        //获取当下展示页面位置
        const { currentIndex } = this.state;

        //控制下一个图片位置
        //重置或直接下一张
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1

        console.log(lastIndex);
         
        //更新当前位置 完成更新
        this.setState({
        	currentIndex: index
        	
        })
    }

	render (){
       // console.log(this.state.homePageSlides);

        /*获取二维码个数及路径数组*/
        const weixinFileArray = this.state.weixinFileArray; 
        const weixinFilePath = this.state.weixinFilePath;
        //console.log(weixinFilePath);
        //console.log(weixinFileArray); 


		return(
            /**首页
            **Slider 轮播图 包含图片区域 及 左右箭头
            **weixin 微信二维码大区域
            **weixin-rows 二维码所有图片区域
            **img 单张图片
            **/
            <div className="container">
                <div>            	    
             	    <div>
             	        <Slider 
                          homePageSlides = {this.state.homePageSlides}
                          currentIndex = {this.state.currentIndex}
                          goToNextSlide = {this.goToNextSlide}
                          goToPrevSlide = {this.goToPrevSlide}
             	        />
                        <div className="weixin" >
                            {weixinFileArray &&  weixinFilePath ? 
                            (<div className="weixin-rows">{weixinFileArray.map((column, columnIndex) => {
                                return(
                                    <img className='weixin-img' key={columnIndex} src={`${weixinFilePath[columnIndex]}`} alt=""/>
                                )
                               })}
                            </div>)
                            : (<div></div>) 
                            }
                        </div>
             	    </div>
                </div>
            </div>
        )
	}

}
export default Home;