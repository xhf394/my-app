import React from 'react';
import './TechnicalSupportsSquare.css';


class TechnicalSupportsSquare extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hover: false,
		}

		this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    onMouseEnter(){
		this.setState({
			hover: true
		})
	}

	onMouseLeave(){
        this.setState({
        	hover: false,
        	})
	}

	render(){
		//这里需要加条件	
		//console.log(this.props.technicalSupportsSquare);
		//console.log(this.props.index);
		const index = this.props.index + 1;
		const title = this.props.technicalSupportsSquare.title;



        if(this.state.hover){
        	return(       	
        	<div
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
        	>

        	
        	
        	{ index ? 
        		(<div className="technical-title" >
        			<span style={{color: 'red'}}>{index} 、 {title} </span>
        		</div>)
        		:
        		(<div></div>)
        	}
        	</div>
        	)  
        }
        else {
        return(       	
        	<div
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
        	>
        	{ index ? 
        		(<div className="technical-title">
        			{index} 、 {title}
        		</div>)
        		:
        		(<div></div>)
        	}
        	</div>
        	)  
        }
	}

}

export default TechnicalSupportsSquare;