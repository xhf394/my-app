import React from 'react';
import { Switch, Route } from "react-router-dom";
import './Construction.css';
import Board from './Board';
import SquareContent from './SquareContent';
import axios from 'axios';

class Construction extends React.Component {
	  constructor(props){
      super(props);
      //初始化值
      this.state = {
        constructionSlides : [],
        squares : [],
        constructionGallery : [],
        gallerySquares : []
      }

	  }
    
    async componentDidMount(){
      //获取地坪施工数据
      axios.get('https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getabstractsbyclassificationwithget?classification=construction-mix-A')
         .then((response)  => 
                this.setState ({
                  //获取所有数据
                  constructionGallery: response.data,
                  //创建对应长度的空白填充数组
                  gallerySquares: Array(response.data.length).fill(null)
                })
          )
         .catch(function (error) {
          console.log(error)
         })
    }


    

    render () {
      /**地坪施工页面
       **container 所有信息区域
       **Switch 路由切换标志
       **Route 路由指定
       **Board 地坪施工主页区域
       **SquareContent 跳转至对应内容页面区域
       **/

    	return (
            <div className="container">
              <div className="construction-row-container">
                  <Switch >
                      <Route exact path = {`${process.env.PUBLIC_URL}/construction`} render={({match}) => ( 
                          <Board
                              constructionSlides={this.state.constructionSlides}
                              squares={this.state.squares}
                              match={match}
                              constructionGallery ={this.state.constructionGallery}
                              gallerySquares={this.state.gallerySquares}
                          />
                      )}/>  
                      
                      <Route  path={`${process.env.PUBLIC_URL}/construction/:id`} render={({match})=>(
                          <SquareContent 
                              constructionSlides={this.state.constructionSlides}
                              constructionGallery ={this.state.constructionGallery}
                              match={match}
                          />
                      )}/> 
                  </Switch>  
              </div>
            </div>
        )
    }
}

export default Construction;
