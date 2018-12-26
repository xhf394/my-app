import React from 'react';
import { Link } from "react-router-dom";
import './TechnicalSupportsBoard.css';
import TechnicalSupportsSquare from './TechnicalSupportsSquare';

class TechnicalSupportsBoard extends React.Component {

    //单个技术服务主页标题方块
	renderTechnicalSupportsSquare(i){
         return(
         	/**单个标题方块
             * 路径为对应i值获取
             * TechnicalSupportsSquare 单个主页标题方块
            */
         	<Link key={i}  to={`${process.env.PUBLIC_URL}/technical-supports/${this.props.technicalSupportsSlides[i].id}`}>
         	    <TechnicalSupportsSquare 
         	    key={i}
                index={i}
                technicalSupportsSquare={this.props.technicalSupportsSlides[i]}
         	    />
         	</Link>
         	
         	)
	}

	render() {
        //console.log(this.props.technicalSupportsSlides);
		//console.log(this.props.technicalSupportsSquares);
		//浅备份技术服务所有数据数组
		//const technicalSupportsSlides = this.props.technicalSupportsSlides.slice();

        //浅备份对应空白数组
		const technicalSupportsSquares = this.props.technicalSupportsSquares.slice();

		return(
            /**技术服务主页 
             * 以技术长度为依据循环单个信息方块
            */
            <div>
              	{technicalSupportsSquares 
                    ? 
                    (<div>
                	    {technicalSupportsSquares.map((column, columnIndex) =>{
                		    return (
                			    this.renderTechnicalSupportsSquare(columnIndex)                	
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

export default TechnicalSupportsBoard;

