import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";


class Navigation extends React.Component {
    constructor(props){
      super(props);

      /*设置侧边栏初始值为false*/
      this.state = {
        menuOpen: false
      }
    }
    
    /*设置侧边栏状态变化事件*/ 
    handleStateChange (state) {
      this.setState({
        menuOpen: state.isOpen
      })
    }
    
    /*侧边栏关闭事件*/
    closeMenu () {
      this.setState({
        menuOpen: false
      })
    }

	render () {

    /**导航栏
    **navbar 整个导航栏区域
    **nav 导航
    **SideBar 侧边栏 当页面小于820px时出现
    **nav-logo 导航栏上商标区域
    **spacer 空display: flex 1 控制空白区域
    **nav-items 导航栏文字部分
    **nav-item 每一个单独链接区域
    **/

		return (
		<div className="container" >
          <div className ="nav-logo">              
            <Link to={`${process.env.PUBLIC_URL}/`} style={{textDecoration: "none",height:'70px'}}><img src={`https://www.codeinboxes.com/dyne/public/static/images/logo/logo.jpg
`} alt="main logo"/></Link>
          </div>

          
	            <ul className="nav-items"  style={{display:"flex", listStyleType: "none" }}>        
	              <li >
	                <Link to={`${process.env.PUBLIC_URL}/`} className="nav-item" >首页</Link>
	              </li>
	              <li >
	                <Link to={`${process.env.PUBLIC_URL}/about-us`} className="nav-item">关于我们</Link>
	              </li>
	              <li >
	                <Link to={`${process.env.PUBLIC_URL}/construction`} className="nav-item">地坪施工</Link>
	              </li>
	              <li >
	                <Link to={`${process.env.PUBLIC_URL}/products`} className="nav-item">产品销售</Link>
	              </li>
	              <li >
	                <Link to={`${process.env.PUBLIC_URL}/news`} className="nav-item">新闻中心</Link>
	              </li>
	              <li >
	                <Link to={`${process.env.PUBLIC_URL}/technical-supports`} className="nav-item">技术服务</Link>
	              </li>
	              <li >
	                <Link to={`${process.env.PUBLIC_URL}/jobs`} className="nav-item">企业招聘</Link>
	              </li>
	              <li >
	                <Link to={`${process.env.PUBLIC_URL}/contact-us`} className="nav-item">联系我们</Link>
	              </li>
	            </ul>
          
      </div>
	  )
	}
}





export default Navigation;

