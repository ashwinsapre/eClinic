import React, {Component} from 'react';
import axios from "axios"

export default class showUsers extends Component{
    constructor(props){
        super(props)

        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/show')
            .then(res=>{
                if (res.data.length>0) {
                    this.setState({
                        users:res.data.map(user=>user.username)
                    })
                }
            })
            .catch(err=>console.log('ERROR:', err))
    }
    render(){
        return(
            <div>
                {this.state.users}
            </div>
        )
    }
}