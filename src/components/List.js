import React, {Component} from 'react'

// Create a class component with the RENDER method
class List extends Component{
   
    render(){
         // iterate through list of fruits
        const fruitItems = this.props.fruits.map((fruit,index) =>{
            return <li key={index}>{fruit}</li>
        })
        return(
            <ul>
               {fruitItems}
            </ul>
        )
    }
}
export default List
