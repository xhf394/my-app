import React from 'react';
import axios from 'axios';
import './Jobs.css';
import JobsBoard from './JobsBoard';


class Jobs extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      data: [],
      jobsSquares: []
    }		
	}

	async componentDidMount() {
    //获取对应照片信息 & 给定对应个数的空白填充数组
		axios.get('https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getabstractsbyclassificationwithget?classification=recruitment-mix-A')
         .then((response)  => 
                this.setState({
                  data: response.data,
                  jobsSquares: Array(response.data.length).fill(null)
                })
          )
         .catch(function (error) {
          console.log(error)
         })
	}

	render(){

    /** 企业招聘主页面
     * container 整个区域
     * JobsBoard 招聘信息区域
    */
		return(
			<div className="container" >
        <div>
          <JobsBoard 
            data={this.state.data}
            jobsSquares={this.state.jobsSquares} 
          />	
        </div>
			</div>)
	}
}

export default Jobs;