import React from 'react';
import axios from 'axios';
import './NewsSquare.css';


class NewsSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: undefined,
        }
    }
    
    async componentDidMount() {
        const id = this.props.id;

        axios.get(`https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getarticlebyidwithget?id=${id}`)
         .then((response)  => 
            this.setState({
                text: response.data.text,
            })
          )
         .catch(function (error) {
          console.log(error)
         })
    }
	render(){
		//获取每一条新闻对应对象信息
		const newsSlides = this.props.newsSquare;
		//console.log(newsSlides);
        //console.log(this.props.id);

		//新闻标题页面图片获取
        const newsFileLevel = newsSlides.filelevel;
       
        //定位路径
        const newsFileIndex = filePathIndex(newsFileLevel);
        const url = newsSlides.filepath[newsFileIndex];       
        
        //获取新闻标题
        const title = newsSlides.title; 

        /*获取新闻内容并初次转换HTML实体*/
        const Entities = require('html-entities').XmlEntities;
        const entities = new Entities();
        const text = entities.decode(this.state.text);      
        console.log( text );
        console.log(this.state.text);
        
        return(
            /**
             * 单个新闻区域
             * span 新闻标题
             * img 对应首页图片 
            */
        	<div>
        		{title?
        			(<div className="titles">      				
        				<div className="news-title-text">
                            {text
                            ? 
                            (<div dangerouslySetInnerHTML={{__html : text}}></div>)
                            :
                            (<div></div>)}
                        </div>
                        <div className="title-pic">
                            <img src={url} alt=""/>
                        </div>
        			</div>)
        			:(<div></div>)}
        	</div>)  
	}

}

export default NewsSquare;


/**定位1级图片位置，并返回对应index
 * @params array 
 * @return 每个数组只有唯一1值，输入数组，返回对应位置
*/
function filePathIndex (fileLevelArray) {
	for(let i = 0; i < fileLevelArray.length; i++){
		if(fileLevelArray[i] === 1){
			return i;
		}
	}
}