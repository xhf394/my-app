import React from 'react';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';
import './TechnicalSupports.css';
import TechnicalSupportsBoard from './TechnicalSupportsBoard';
import TechnicalSupportsContent from './TechnicalSupportsContent';

class TechnicalSupports extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
        	technicalSupportsSlides: [],
        	technicalSupportsSquares: []
        }
	}
    
	async componentDidMount() {

		axios.get('https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getabstractsbyclassificationwithget?classification=technicalservice-mix-A')
         .then((response)  => 
                this.setState({
                	//获取技术服务数据数组
                	technicalSupportsSlides: response.data,

                	//创建技术服务对应长度空白数组
                	technicalSupportsSquares: Array(response.data.length).fill(null)
                })
          )
         .catch(function (error) {
          console.log(error)
         })
	}

	render(){
        /**技术服务页面
         * container 整个技术服务页面区域
         * Switch 页面路由切换区域
         * Route 路由
         * TechnicalSupportBoard 技术服务主页面
         * TechnicalSupportContent 技术服务内页
        */
		return(
			<div className="container">
				<Switch>
				    <Route exact path = {`${process.env.PUBLIC_URL}/technical-supports`} render={({match}) => {
                        return(
                            <TechnicalSupportsBoard 
                                technicalSupportsSlides={this.state.technicalSupportsSlides}
                                technicalSupportsSquares={this.state.technicalSupportsSquares}
                                match={match} 
                            />
                        )
				    }}/>

				    <Route path={`${process.env.PUBLIC_URL}/technical-supports/:id`} render={({match}) => {
				    	return(
				    		<TechnicalSupportsContent 
				    		    match={match}
				    		/>
				        )
				    }}/>
				</Switch>	
			</div>
		)
	}
}

export default TechnicalSupports;
