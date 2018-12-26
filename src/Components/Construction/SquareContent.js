import React from 'react';
import './SquareContent.css';
import axios from 'axios';


class SquareContent extends React.Component{
    constructor(props){
      super(props);
      //初始化各项值
      this.state = {
      	data: [],
      	id : null,
      	title: null,
      	abstracts: null,
      	text: null,
      	filepath: [],
      	filelevel: [],

      }
    }
    
    componentDidMount(){
      //给定id值为通过router路径传递中获取的id值
    	const id = this.props.match.params.id;
      
      //以id为变量获取对应地坪内页信息
      axios.get(`https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getarticlebyidwithget?id=${id}`)
      .then(response=>
        this.setState ({
        	data: response.data,
        	id: response.data.id,
        	title: response.data.title,
        	abstracts: response.data.abstracts,
        	text: response.data.text,
        	filepath: response.data.filepath,
        	filelevel: response.data.filelevel
        })
      )
      .catch(function(error) {
            console.log(error)
        })         
    }

    render(){
      //对图片路径浅备份
      const filepath = this.state.filepath.slice();
      
      //对图片层级浅备份
      const filelevel = this.state.filelevel.slice();

      //获取内页图片路径
      const contentFilePathArray = contentFilePath(filelevel, filepath);
      
      //转换html实体
      const Entities = require('html-entities').XmlEntities; 
      const entities = new Entities();
      const text = entities.decode(this.state.text);


    return (
      /**地坪内页信息
       **construction-container 地坪施工内页区域
       **construction-content-description html实体转换后文字内容
       **construction-imgs 图片安图片路径循环后展示 flex column 竖直显示
       **img 每个单张图片
      **/
      <div>
       	{this.state.data && this.state.filepath
          ?
       		(<div>{this.state.text && filepath
            ? 
       			(<div className="construction-container">
	                <div className="construction-content-description" dangerouslySetInnerHTML={{__html : text}}>
	                
	                </div>
				    <div className="construction-imgs" >
				      	{contentFilePathArray.map((filePath, fileIndex)=> {
				      		return(
				      			<img key={fileIndex} src={filePath} alt="" />
		      			)})}
				    </div>
       			</div>) 
            : 
            (<div></div>)}</div>) 
       		: 
        (<div></div>)}
      </div>
    )
    }
}

export default SquareContent;

/**获取内页图片路径
**@params1 array 路径层级
**@params2 array 图片路径
**所有内页图片等级为2，返回新数组，包含所有等级为2的图片路径
**/
function contentFilePath (filePathLevel, filePathArray) {	
	let contentFilePath = [];
	for(let i = 0; i < filePathLevel.length; i++){
		if(filePathLevel[i] === 2){
      contentFilePath.push(filePathArray[i]);
		}
	}
	return contentFilePath;
}

