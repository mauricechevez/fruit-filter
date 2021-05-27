import React, {Component} from 'react'

// Create a class component with the RENDER method
class Input extends Component{
    render(){
        return(
            <div>
                <label htmlFor="fruit-filter">Filter the fruits: </label>
                <input type="text" name="fruit-filter" id="fruit-filter" value={this.props.value} onChange={this.props.onChange}></input>
            </div>
        )
    }
}
export default Input
