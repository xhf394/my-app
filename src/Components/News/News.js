import React from 'react';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';
import './News.css';
import NewsBoard from './NewsBoard';
import NewsContent from './NewsContent';

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsSlides: [],
			newsSquares: []
		}
	}

	async componentDidMount() {
    //获取新闻信息列表及对应信息长度的填充空白
		axios.get('https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getabstractsbyclassificationwithget?classification=newscenter-mix-A')
         .then((response)  => 
            this.setState({
              newsSlides: response.data,
              newsSquares: Array(response.data.length).fill(null)
            })
          )
         .catch(function (error) {
          console.log(error)
         })
	}

	render(){
    /**
     * news 区域
     * container 整体区域
     * Switch 路由
     * Route 路由地址
     * NewsBoard 新闻首页
     * NewsContent 新闻内页
    */ 
		return(
			<div className="container">
        <div>
          <Switch>
            <Route exact path = {`${process.env.PUBLIC_URL}/news`} render={({match}) => {
              return(
                <NewsBoard 
                  newsSlides={this.state.newsSlides}
                  newsSquares={this.state.newsSquares}
                  match={match}
                />
              )
            }}/>
                        
            <Route path= {`${process.env.PUBLIC_URL}/news/:id`} render={({match}) => {
              return(
                <NewsContent
                  match={match} 
                />
              )
            }}/>
          </Switch>
        </div>
			</div>
    )
	}
}

export default News;