import React from 'react';
import { Link } from "react-router-dom";
import './NewsBoard.css';
import NewsSquare from './NewsSquare';

class NewsBoard extends React.Component {
  
   /**
     * 每一个新闻内容方块
     * @param number
     * @return one link contains one square: 
        passed id as path router 
        passed each piece of news to square
    */
	renderNewsSquare(i){
         return(
         	<Link key={i} to={`${process.env.PUBLIC_URL}/news/${this.props.newsSlides[i].id}`}>
         	    <NewsSquare
                 key={i}
                 index={i}
                 newsSquare={this.props.newsSlides[i]}
         	    />
         	</Link>
         	)
	}

	render() {
    //浅备份空白数组
    const newsSquares = this.props.newsSquares.slice();
    
    /**
     * 新闻循环渲染后的所有内容
     * 包含每一个循环后的新闻链接方块
    */
		return(
      <div>
        {newsSquares 
          ?
          (<div>
            {newsSquares.map((column, columnIndex) => {
              return (
                this.renderNewsSquare(columnIndex)
              )
            })}
          </div>)
          :
          (<div></div>)
        }
      </div>
		)
	}
}

export default NewsBoard;