import React from 'react';
import axios from 'axios';
import './ContactUs.css';


class Products extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
         label:[],
         contactUsCode: [],
         contactUsCodeSquares: []
    }
       
	}

    async componentDidMount(){
        //获取公司相关信息
        axios.get('https://www.codeinboxes.com/dyne/index.php/api/labelmanager/getlabelsbylocationwithget?location=contectus-mix-A')
         .then((response)  => 
                this.setState({
                   label: JSON.parse(response.data[0].label),
                })
          )
         .catch(function (error) {
          console.log(error)
         })
        
        //获取公司二维码 & 生成对应数目空白数组
        axios.get('https://www.codeinboxes.com/dyne/index.php/api/imagesmanager/showimagesbylocationwithget?location=contectus-pic-A')
         .then((response)  => 
               this.setState({
                 contactUsCode: response.data,
                 contactUsCodeSquares: Array(response.data.length).fill(null)
               })
                )
         .catch(function (error) {
          console.log(error)
         })         
    }	

	render() {
      /*获取公司具体信息*/
      const label = this.state.label;
      const companyName = label['company_name'];
      const companyPeople = label['company_people'];
      const companyPhone = label['company_phone'];
      const companyAddress = label['company_address'];
      //console.log(label);
      //console.log(companyName)
      
      /*获取二维码个数和信息*/
      const contactUsCodeSquares = this.state.contactUsCodeSquares.slice();
      const contactUsCode = this.state.contactUsCode;
      //console.log(contactUsCode);


		return(
      /** 联系我们页面
       * container 整个页面区域
       * contactUs-content 公司信息文字部分
       * contactUs-code 公司信息 二维码部分
       * img 单个二维码图片
      */
			<div className="container">
			  <div className="contactUs-content" style={{display: 'flex', flexDirection: 'column'}}>
		          <span>{companyName}</span>
		          <span>联系人： {companyPeople}</span>
		          <span>联系电话： {companyPhone}</span>
		          <span>地址： {companyAddress}</span>  
    			</div>
        <div className="contactUs-code">
          {contactUsCodeSquares 
            ? 
            (<div>
              {contactUsCodeSquares.map((column, columnIndex) => {
                return(
                  <img className="contactUs-img" key={columnIndex} src={contactUsCode[columnIndex].filepath} alt=""/>
                )
              })}
            </div>)
            : 
            (<div></div>)}
        </div>    
      </div>
		)
	}
}

export default Products;
