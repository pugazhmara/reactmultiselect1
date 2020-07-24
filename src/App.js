//header Files
import React from 'react';
import data from "./data1.json";
import Products from './components/Products';
import Select from "react-select";
import makeAnimated from 'react-select/animated';
//declare animated component
const animatedComponents = makeAnimated();

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:data.products,
      search:"",
      gender:"",
      products1:[],
      products2:[],
      options : [
        { value: 'Watches', label: 'Watches' },
        { value: 'Sarees', label: 'Sarees' },
        { value: 'Tops', label: 'Tops' },
        { value: 'Jeans',label:'Jeans'},
        { value: 'Flip Flops',label:'Flip Flops'},
        { value:'Kurtas',label:'Kurtas'},
        { value:'Casual Shoes',label:'Casual Shoes'},
        { value:'Sweatshirts',label:'Sweatshirts'},
        { value:'Kurta Sets',label:'Kurta Sets'},
        { value:'Dresses',label:'Dresses'},
        { value:'Jackets',label:'Jackets'},
        { value:'Shirts',label:'Shirts'},
        { value:'Fitness Bands',label:'Fitness Bands'},
        { value:'Tshirts',label:'Tshirts'},
        { value:'Jumpsuit',label:'Jumpsuit'},
        { value:'Track Pants',label:'Track Pants'},
        { value:'Clothing Set',label:'Clothing Set'},
        { value:'Headphones',label:'Headphones'},
        { value:'Track Pants',label:'Track Pants'},
        { value:'Mascara',label:'Mascara'},
        { value:'Kajal and Eyeliner',label:'Kajal and Eyeliner'},
        { value:'Suits',label:'Suits'},
        { value:'Sports Shoes',label:'Sports Shoes'},
        { value:'Smart Watches',label:'Smart Watches'},
        { value:'Trousers',label:'Trousers'}
      ],
      selectedOption:[], 
    };
  }
  handleChange= e=>{
    //console.log(e.length);
   
    if(e!==null){
     var len= e.length;
    }
    //set the target the value to selectedOption
    this.setState({selectedOption:e}||null);
    //If target value is null display all the products  
    if(e===null||len===0){
      this.state.products =data.products;
    }
    //else display which one is selected
    else{
    return (
      
      //Map the each Object value to the products1(Because "e" contains lable and value)
      this.state.products1=(e.map( product=> (product.value))),
      
      //Map the which one want to display and store it products
      this.state.products=this.state.products1.map((x)=>
      data.products.filter(product=>product.category.indexOf(x)!==-1)),
      //rearrage the item 
      this.state.products.map(x=>x.map(y=>
          this.state.products=this.state.products2.push(y
    
      ))),
      this.setState({
         //copy the products2 properties to the products
         products:this.state.products2,
         //then to empty the products2 
         products2:[]
      })
     
      
      );
          }
  }
 
    render(){
      const { selectedOption } = this.state;
      return(
      <div className="grid-container">
        <header>
         <div className="title-incresco"> Incresco Shopping </div> 
        </header>
        <main>
           <div className="content">
           <div className="items" >
            MultiSelect:{"   "}
  
            <Select  
              //closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={this.state.options}
              onChange={this.handleChange}
              value={selectedOption}
              placeholder="select the products"
            />
            </div>
            <Products products={this.state.products}></Products>
           </div>
        </main>
        <footer>
            All rights are reserved by incresco
        </footer>
      </div>
    );
 }
}
export default App;
