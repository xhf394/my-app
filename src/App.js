import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/HomePage/Home';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Construction from './Components/Construction/Construction';
import AboutUs from './Components/AboutUs/AboutUs';
import Products from './Components/Products/Products';
import TechnicalSupports from './Components/TechnicalSupports/TechnicalSupports';
import News from './Components/News/News';
import Jobs from './Components/Jobs/Jobs';
import ContactUs from './Components/ContactUs/ContactUs';
import ScrollToTop from './ScrollToTop';
import Footer from './Components/Footer/Footer';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/about-us",
    main: () => <AboutUs />
  },
  {
    path: "/construction",
    main: () => <Construction />
  },
  {
    path: "/products",
    main: () => <Products />
  },
  {
    path: "/news",
    main: () => <News />
  },
  {
    path: "/technical-supports",
    main: () => <TechnicalSupports />
  },
  {
    path: "/jobs",
    main: () => <Jobs />
  },
  {
    path: "/contact-us",
    main: () => <ContactUs />
  },
]

class Greetings extends React.Component {
  render() {
    return(
      /*首页欢迎图片*/
      <div className="greeting" style={{
        opacity: `${this.props.greeting}`, 
        transition: 'opacity 2s',
        margin: 'auto',
        position:'fixed',
        width: '150px',
        height: '100px',
        top: 0, left: 0, bottom: 0, right: 0,
        textAlign:'center',
        }}>
        <img src={`https://www.codeinboxes.com/dyne/public/static/images/logo/logo.jpg
`} alt="main logo" style={{width: '100%', height: '60%'}}/>
      </div>)
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.timer = null;
    this.state = {
      greeting: 0,
      appContents: 0
    }
    
    this.showGreeting = this.showGreeting.bind(this);
  }
  
  componentDidMount(){
     this.showGreeting();
  }
  
  /*首页欢迎界面*/
  showGreeting(){ 
      this.setState({
        greeting: 0.8
      });

      /*设定效果时间并更新state 使欢迎界面消失，获取主界面*/
     this.timer = setTimeout(()=>{this.setState({greeting: 0, appContents:1})},2000);
    
    }

  render(){
    return(
      /**网站页面分布
       **Router 整体路由
       **ScrollToTop  页面跳转时的方法
       **Greetings 欢迎界面 2s后消失
       **Navigation 导航栏区域
       **main-page 主体部分
      **/
    <Router basename="/dyne">
      <ScrollToTop>
      <div >
      <Greetings greeting={this.state.greeting}/>
      <div id="App" style={{opacity: this.state.appContents, transition: 'opacity 2s', width: '100%'}} >
        <div >
          <Navigation />
          <div className="main-page" style={{marginTop: '50px', width: '100%'}}>
             {routes.map((route, index) => (
                <Route
                  key = {index}
                  path={`${process.env.PUBLIC_URL}${route.path}`}
                  exact={route.exact}
                  component={route.main}
                />
                ))
              }
        	</div>
        	<Footer />
        </div>
      </div>
      </div>
      </ScrollToTop>
    </Router>
      )
  }

}

export default App;


