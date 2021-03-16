import React, {Component} from 'react';
import axios from "axios"

export default class showUsers extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get('http://localhost:5000/show')
            .then(res=>console.log(res))
            .catch(err=>console.log('ERROR:', err))
    }
    render(){
        return(
            <div>
                Show all users.
            </div>
        )
    }
}