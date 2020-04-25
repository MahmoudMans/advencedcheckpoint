import React from 'react'
import { checkPropTypes } from 'prop-types'
function ProductTable(props){
  const products=[
    {
      category:"electronic",
      price:"556",
      name:"bleutooth kit"
    },
    {
      category:"clothes",
      price:"4534",
      name:"jacket"
    },
     {
      category:"electronic",
      price:"4568",
      name:"iphone"
    },
    {
      category:"clothes",
      price:"656",
      name:"jeans"
    },
  ]
  return(<div>
    <table>
      <tr>
        <th>category</th>
        <th>price</th>
        <th>name</th>
     </tr>
     {
       props.products.map((product)=>(
         <tr>
           <td>{product.category}</td>
  <td>{product.price}</td>
  <td>{product.name}</td>
         </tr>
       ))
     }
    </table>
  </div>)
}
ProductTable.propTypes = {
  stringProp: PropTypes.product
}
export default ProductTable