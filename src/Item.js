import React from 'react';
import PropTypes from 'prop-types';
//import './Item.css';

const Item = ( {item, children} ) => (

 <div className="Item">
 	 { /* -----------Bloc Left------------   */}
	 
     <div className="Item-left">

         <div className="Item-title"> {item.name}  </div>	 
	     <div className="Item-description"> {item.description}  </div>
		 
	 </div>
	 { /* -----------End Bloc Left------------   */}
	 
	 
	 { /* -----------Bloc Right------------   */}
    <div className="Item-right">

         <div className="Item-price"> {item.price}  </div>	 
	 
	    {children}
	 
	 </div>
  { /* -----------End Bloc Right------------   */}
 
 
 
 </div>


)

Item.propTypes = {
	item : PropTypes.object.isRequired,
	onAddToCart: PropTypes.node
	
}
export default Item ; 

