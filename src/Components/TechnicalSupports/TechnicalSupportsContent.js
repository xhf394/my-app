import React from 'react';
import './TechnicalSupportsContent.css';
import axios from 'axios';

class TechnicalSupportsContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contentId: undefined,
			title: undefined,
			text: undefined,
            data:undefined
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
                text: response.data.text,
                data: response.data
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

        //获取对应内容的序列号

        const id = Number(this.props.match.params.id);
        const idArray = this.props.idArray.slice();
        const index = TechnicalSupportsIndex(id, idArray);
        //console.log(this.props.match.params.id);
        //console.log(this.props.idArray);
        //console.log(index);


		return(
            /** 技术服务内页
             * span 标题 
             * div dangerously.... 内容
            */
            

			<div>
                {title && index
                    ?
                    (<div className="technical-content">
            	        <span className="technical-content-title">
            	            {index}、{title}
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

/**Get content index
* @params1 number content number in system
* @params2 array all contents numbers in a array
* @return number as its index
**/
function TechnicalSupportsIndex(id, idArray) {
    let index = undefined;
    for( let j = 0; j < idArray.length; j++) {
        if( id === idArray[j]) {
            return index = j + 1;
        }           
    }
    return index;
}