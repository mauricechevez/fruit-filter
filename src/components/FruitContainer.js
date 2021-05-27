import React, {Component} from 'react'
import List from './List'
import Input from './Input'
// Create a class component with the RENDER method
class FruitContainer extends Component{
     // add a state to this container
    state = {
        fruitsToDisplay: this.props.fruits,
        fruitValue: ""
    }
    handleFilterChange = (event) =>{
     event.preventDefault();
     let value = event.target.value //app...
     const filteredFruitList = this.props.fruits.filter(fruit=>{
         // What are we trying to do here? Check if fruit value matches the filtered value
         if (fruit.includes(value.toLowerCase())){
            return true;
         } 
    })  
    this.setState({
        fruitsToDisplay: filteredFruitList,
        fruitValue: value
    })
    
    }
    render(){
       
        return(
            <div>
              <Input value={this.state.fruitValue} onChange={this.handleFilterChange}/>
              <List fruits={this.state.fruitsToDisplay} />
            </div>
        )
    }
}
export default FruitContainer