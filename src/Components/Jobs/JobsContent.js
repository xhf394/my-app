import React from 'react';
import axios from 'axios';
import './JobsContent.css';

class ProductContent extends React.Component {
    constructor(props){
    	super(props);
        this.state = {
            title: undefined,
            text: undefined
        }
    }

    async componentDidMount() {
        //获取每个信息对应id值
        const id= this.props.jobsContent.id;
        
        //获取对应id值的title & text
        axios.get(`https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getarticlebyidwithget?id=${id}`)
         .then((response)  => 
                this.setState({
                    title: response.data.title,
                    text: response.data.text
                })
          )
         .catch(function (error) {
          console.log(error)
         })
    
    }
    

    render() {
        
        /*获取相关标题*/
        const title = this.state.title;
        //console.log(title);

         /*获取文章内容并初次转换HTML实体*/
        const Entities = require('html-entities').XmlEntities;
        const entities = new Entities();
        const text = entities.decode(this.state.text);

 
    	return (
            /**单个信息方块
             * container 整个区域
             * div - title 标题
             * div dangerous... 正文
            */
    		<div className="container" >
    			<div className="jobs-all">
                	<div className="jobs-title">{title}</div>
                	<div  dangerouslySetInnerHTML={{__html : text}}></div>
            	</div>
            </div>

    		)
    }
}

export default ProductContent;