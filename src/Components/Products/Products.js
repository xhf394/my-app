import React from 'react';
import axios from 'axios';
import './Products.css';
import ProductsContents from './ProductsContents';

class Products extends React.Component {
	constructor(props) {
		super(props)

        this.state = {
              slideShow: [],
              data: [],
              productsSquares: []
        }
	}

    async componentDidMount(){
        //获取产品id数组
        axios.get('https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getarticleidsbyclassificationwithget?classification=productsale-mix-A')
         .then((response)  => 
                this.setState({
                  //更新data值为所有产品id号
                	data: response.data,
                  //更新对应填充空白数组
                	productsSquares: Array(response.data.length).fill(null)
                })
          )
         .catch(function (error) {
          console.log(error)
         })
        
        //获取产品页面头部图片
        axios.get('https://www.codeinboxes.com/dyne/index.php/api/imagesmanager/showimagesbylocationwithget?location=productsale-pic-A')
         .then((response)  => 
              this.setState({
                //头部图片为数组的第一个数据
              	slideShow: response.data[0].filepath
              })
                )
         .catch(function (error) {
          console.log(error)
         })         
    }	

	render() {
    /*获取头部图片*/
    const slideShow = this.state.slideShow;

    /**
     *container 产品页面整体区域
     *div-img 头部图片部分
     *ProductsContents 产品详细信息区域
    */  

		return(
		<div className="container">
			<div className="scrollDIV"> 
            	<img className="scrollimg" src={slideShow} alt=""/>
        	</div>
        
	        <ProductsContents 
	          data={this.state.data}
	          productsSquares={this.state.productsSquares}
	        /> 
  		</div>
		)
	}
}

export default Products;
