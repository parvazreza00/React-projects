import React, {Component} from 'react'

class Card2 extends Component{
    render(){
        return(
            <h1 className='border border-danger text-center'>{this.props.name}</h1>
        )
    }
}

export default Card2
