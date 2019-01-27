import React from 'react';
import { Link, NavLink } from "react-router-dom";
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
		<div className="container" style={{height: "133px"}} >         
	            <ul className="nav-items"  style={{listStyleType: "none" }}>        
	              <li>
                  <Link to="/" className ="nav-logo"><img src={`https://www.dyn-e.com/dyne/public/static/images/logo/logo.jpg
`} alt="main logo"/></Link> 
                </li>
                <li >
	                <NavLink exact to="/" className="nav-item" activeStyle={{color: "red"}}>首页</NavLink>
	              </li>
	              <li >
	                <NavLink to="/about-us" className="nav-item" activeStyle={{color: "red"}}>关于我们</NavLink>
	              </li>
	              <li >
	                <NavLink to="/construction" className="nav-item" activeStyle={{color: "red"}}>地坪施工</NavLink>
	              </li>
	              <li >
	                <NavLink to="/products" className="nav-item" activeStyle={{color: "red"}}>产品销售</NavLink>
	              </li>
	              <li >
	                <NavLink to="/news" className="nav-item" activeStyle={{color: "red"}}>新闻中心</NavLink>
	              </li>
	              <li >
	                <NavLink to="/technical-supports" className="nav-item" activeStyle={{color: "red"}}>技术服务</NavLink>
	              </li>
	              <li >
	                <NavLink to="/jobs" className="nav-item" activeStyle={{color: "red"}}>企业招聘</NavLink>
	              </li>
	              <li >
	                <NavLink to="/contact-us" className="nav-item" activeStyle={{color: "red"}}>联系我们</NavLink>
	              </li>
	            </ul>
          
      </div>
	  )
	}
}





export default Navigation;

