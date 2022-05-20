import React from 'react';

export default class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <h1>Gallery {this.props.id}</h1>
        )
    }
}