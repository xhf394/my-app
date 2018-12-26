import React from 'react';
import { Link } from "react-router-dom";
import Square from './Square';
import './Board.css';

class Board extends React.Component {
    
    /**单个方块渲染**/
	renderSquare(i){
      return (
        /**加上Link标签作为链接使用
         **i值作为唯一对应值匹配地坪棋盘中的位置
         **动态路由为匹配数组的对应id传入子组件，获取相关id信息并进行跳转 
        **/

      	<Link style={{textDecoration: 'none'}} key={i} to={`${process.env.PUBLIC_URL}/construction/${this.props.constructionGallery[i].id}`} >
            <Square 
              key={i}
              index={i}
              constructionSquare={this.props.constructionGallery[i]}
            />
         </Link>        
      )
      
    }

    

    render() {
        //对整个地坪施工数组进行浅备份供后面处理
        //const constructionGallery = this.props.constructionGallery.slice();
        //对应空白填充数组浅备份
        const gallerySquares = this.props.gallerySquares.slice();

    	return(
            /**地坪施工图片(作为链接)页面区域
             **construction-rows 每一行展示区域(每行两个)
            **/
            <div>                           
                {chunkArray(gallerySquares, 2).map((rows, rowsIndex) =>{
                    return (
                        <div className="construction-rows" key={rowsIndex}>
                            {rows.map((column, columnIndex) => {
                              return (   
                                this.renderSquare(rowsIndex*2 + columnIndex)
                              )
                            })}
                        </div>
                    )
                })}              
            </div>
        )
     }

}

export default Board;


/**切割数组函数
@params1 array 需要切割的数组
@params2 number 切割长度
将目标数组按要求长度切割，并返回新数组
**/
function chunkArray(myArray, chunkSize) {
	let result = [];

	while(myArray.length){
		result.push(myArray.splice(0, chunkSize));
	}

	return result;
}




