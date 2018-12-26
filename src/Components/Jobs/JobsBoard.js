import React from 'react';
import './JobsBoard.css';
import JobsContent from './JobsContent';

class JobsBoard extends React.Component {
    
    //单个招聘信息方块
    renderJobsSquare(i){
    	return(
            <JobsContent 
                key={i}
                jobsContent={this.props.data[i]}
            />
    	)
    }

    render() {

        /*获取对应招聘信息个数*/
        const jobsSquares = this.props.jobsSquares.slice();  //浅备份
        //console.log(this.props.jobsSquares);
        //console.log(this.props.data)

    	return (
            /** 企业招聘信息循环显示
             *  单个信息组循环渲染
            */
    		<div>
                {jobsSquares 
                    ?
                    (jobsSquares.map((column, columnIndex) => {
                        return(
                            this.renderJobsSquare(columnIndex)
                        )
                    }))
                    :
                    (<div></div>)
                }      
            </div>
        )
    }
}

export default JobsBoard;