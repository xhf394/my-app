import React from 'react';
import './TechnicalSupportsContent.css';
import axios from 'axios';

class TechnicalSupportsContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contentId: undefined,
			title: undefined,
			text: undefined
		}

	}
	async componentDidMount(){
        //路径跳转获取id
        const id = this.props.match.params.id;
        
        //获取title & content & id
		axios.get(`https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getarticlebyidwithget?id=${id}`)
        .then(response=>
        	this.setState({
                contentId: response.data.id,
                title: response.data.title,
                text: response.data.text
        	}))
        .catch(function (error) {
          console.log(error)
         })	   
	}

	render(){
        
         //将html实体进行转换
        const Entities = require('html-entities').XmlEntities;
        const entities = new Entities();
        const text = entities.decode(this.state.text);
        
        //定义title
        const title = this.state.title;

		return(
            /** 技术服务内页
             * span 标题 
             * div dangerously.... 内容
            */
			<div>
                {title 
                    ?
                    (<div className="technical-content">
            	        <span className="technical-content-title">
            	            {title}
                        </span>
                        <div dangerouslySetInnerHTML={{__html : text}}></div>
                    </div>)
                    :
                    (<div></div>)
			    }
            </div>
        )
	}
}

export default TechnicalSupportsContent;