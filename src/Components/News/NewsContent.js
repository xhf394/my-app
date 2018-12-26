import React from 'react';
import './NewsContent.css';
import axios from 'axios';
import NewsContentSquare from './NewsContentSquare';

class NewsContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fileLevel: [],
			filePath: [],
			text: undefined,
		}

	}
	async componentDidMount(){
		
        //通过路径获取对应新闻id
        const id = this.props.match.params.id;
        
        //获取对应新闻内页信息
 		axios.get(`https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getarticlebyidwithget?id=${id}`)
        .then(response=>
        	this.setState({
        		fileLevel: response.data.filelevel,
        		filePath: response.data.filepath,
        		text: response.data.text,
        	}))
        .catch(function (error) {
          console.log(error)
         })	   
	}
    
    //每个循环中的新闻内页图片方块
	renderNewsContentSquare(i){
		//获取新闻中对应层级图片
        const fileLevel = this.state.fileLevel;
        const filePath = this.state.filePath;
        const contentFilePathArray = contentFilePath(fileLevel, filePath);
        
        //新闻内页单张图片
		return(
            <NewsContentSquare 
            key={i}
            url={contentFilePathArray[i]}
            />
			)
	}

	render(){
        /*获取新闻中对应层级图片*/
        const fileLevel = this.state.fileLevel;
        const filePath = this.state.filePath;
        const contentFilePathArray = contentFilePath(fileLevel, filePath);        
        
        /*获取图片个数创建对应空数组*/
        const filePathSquares = Array(contentFilePathArray.length).fill(null);
        const filePathSquaresCopy = filePathSquares.slice();
        
        /*获取新闻内容并初次转换HTML实体*/
        const Entities = require('html-entities').XmlEntities;
        const entities = new Entities();
        const text = entities.decode(this.state.text);

        
		return(
            /**
             * container 整个内页区域
             * news-text 新闻正文
             * news-imgs 新闻内页图片
            */
			<div className="container">
			    <div className="news-text">
				    {text
                        ? 
					    (<div dangerouslySetInnerHTML={{__html : text}}></div>)
					    :
                        (<div></div>)}
				</div>
				
                <div className="news-imgs" >
					{chunkArray(filePathSquaresCopy, 2).map((rows, rowsIndex) =>{
                        return (
                            <div key={rowsIndex} className="news-img">
                                {rows.map((column, columnIndex) => {
                                    return (   
                                        this.renderNewsContentSquare(rowsIndex*2 + columnIndex)
                                    )
                                })}
                            </div>
                        )
                    })}
				</div>	
			</div>)
	}
}

export default NewsContent;


/**获取内页图片路径
 * @params1 array 路径层级
 * @params2 array 图片路径
 * @return 所有内页图片等级为2，返回新数组，包含所有等级为2的图片路径
*/
function contentFilePath (filePathLevel, filePathArray) {	
	let contentFilePath = [];
	for(let i = 0; i < filePathLevel.length; i++){
		if(filePathLevel[i] === 2){
           contentFilePath.push(filePathArray[i]);
		}
	}
	return contentFilePath;
}


/**切割数组函数
 * @params1 array 需要切割的数组
 * @params2 number 切割长度
 * @return 将目标数组按要求长度切割，并返回新数组
*/
function chunkArray(myArray, chunkSize) {
	let result = [];

	while(myArray.length){
		result.push(myArray.splice(0, chunkSize));
	}

	return result;
}