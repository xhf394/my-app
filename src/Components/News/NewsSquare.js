import React from 'react';
import './NewsSquare.css';


class NewsSquare extends React.Component {

	render(){
		//获取每一条新闻对应对象信息
		const newsSlides = this.props.newsSquare;
		//console.log(newsSlides);

		//新闻标题页面图片获取
        const newsFileLevel = newsSlides.filelevel;
       
        //定位路径
        const newsFileIndex = filePathIndex(newsFileLevel);
        const url = newsSlides.filepath[newsFileIndex];       
        
        //获取新闻标题
        const title = newsSlides.title;       

        return(
            /**
             * 单个新闻区域
             * span 新闻标题
             * img 对应首页图片 
            */
        	<div>
        		{title?
        			(<div className="titles">
        				<img className="title-pic" src={url} alt=""/>
        				<div className="news-title-text">
                        	<div className="title-txt">{title}</div>
                        	<div className="title-txt">这个是日期</div>
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