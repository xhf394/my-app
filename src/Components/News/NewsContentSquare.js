import React from 'react';
import './NewsContentSquare.css';


class NewsContentSquare extends React.Component {

	render(){
        //每一张新闻内页图片 
        return(       	
        	<div>
        	    <img className="content-pic" src={this.props.url} alt=""/>
        	</div>
        	)    
	}

}

export default NewsContentSquare;