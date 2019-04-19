import React, { Component } from 'react';
import Nav from './Nav';
import './index.css';
import ItemPage from './ItemPage';
import CartPage from './CartPage'; 
import{items} from './static-data';

class App extends Component {
	
	state = {
		activeTab:0,
		cart:[]
	};
	
	// fonction ajout au panier 
	
	handleAddToCart = (item) =>{
		
		this.setState({
			cart:[...this.state.cart, item.id]  // ...this.state.cart  est un spread operator : Syntaxe ES6 
			
		});
		
	}
// Rappel ES6  du spread operator 
/*
   let a = [1,2,3];
   let b = [a,4] ;  // [[1,2,3],4]
   let c = [...a,4] ; // [1,2,3,4]  

*/

	tabChange = (index)=>{
		
		this.setState({activeTab:index});
	}
	
	
	renderContent(){
		
		switch(this.state.activeTab){
			default:
			case 0: return  <ItemPage  items={items} onAddToCart={this.handleAddToCart} />;
			case 1: return  this.renderCart();
		}
	}	
		
	
		renderCart(){
			
			// combien d'item dans le panier 
			
			let itemCounts = this.state.cart.reduce ( (itemCounts, itemId)=>{
				
				itemCounts[itemId] = itemCounts[itemId] || 0;
				itemCounts[itemId]++;
				return itemCounts; 
				
			}, {}); 
			
			// creation d'un tableau Array d'items ( products pour certains ;) !!!
			
			let cartItems = Object.keys(itemCounts).map( itemId =>{
				
				// trouvons l'element avec son id 
				
				let item = items.find( item =>  

					item.id === parseInt(itemId,items.length +1)
				); 
				
				// creation d'un nouveau element 
				
				return {
					
					...item,
					count: itemCounts[itemId]
				}
			}

			);
			
			return ( <CartPage items={cartItems} />)
			
		}
		
		/* Rappel ES6 avec Reduce */
		/*
		  let a =[1,2,3,4];
		  let total = a.reduce( (sum,value) =>{
			  
			  return sum + value;
			  
		  },0)
		
		
		 //      (0,1)  => 1
				 (1,2)  => 3
				 (3,3)  => 6
				 (6,4)  => 10 
			// la fonction reduce retourne le dernier element 
		
		*/
		/*
		  const  a =[1,2,3,4];
		  let total =0;
		  
		  for( let i=0; i < a.length; i++){
			  total +=a[i]  // total = total + a[i]
		  }
		
		*/
		
		
		
		
		
		
		
    render() {
		
	let {activeTab} = this.state;
	
        return (

            <div className="App">
            <h1> Shopping ! </h1>
			
			<h4>You have {this.state.cart.length} product in your cart  </h4>
			
			
		     <Nav activeTab={activeTab} onTabChange={this.tabChange}  />
		       
			   {this.renderContent()}

			
			</div>
        );

    }
}



export default App;