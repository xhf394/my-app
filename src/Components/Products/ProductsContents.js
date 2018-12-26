import React from 'react';
import './ProductsContents.css';
import ProductsContent from './ProductsContent';

class ProductsContents extends React.Component {
    
    /**
     * 每一个产品内容方块
     * @param number
     * @return id passed and render one square contains 
               images, title, title color and contents.
    */
    renderProductsSquare(i){
        //渲染时循环，通过唯一对应i值传递对应产品id值
    	return(
            <ProductsContent 
                key={i}
                id={this.props.data[i]}
            />
    	)
    }

    render() {

        //获取产品对应id号
        const productsSquares = this.props.productsSquares;
        
        //获取产品id数组
        //const data = this.props.data;
        //console.log(data);

        /**产品销售页面区域
         *根据ID数量进行循环渲染，根据id填入产品内容
         */
    	return (
    		<div>
                {productsSquares 
                    ?
    			    (productsSquares.map((column, columnIndex) => {
    				    return(
                            this.renderProductsSquare(columnIndex)
    				    )
    			    }))
    			    :
    			    (<div></div>)
    		}</div>

    		)
    }
}

export default ProductsContents;