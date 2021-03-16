import React, {Component} from 'react';
import axios from "axios"

export default class newUser extends Component{
    constructor(props){
        super(props)

        this.onchangeusername=this.onchangeusername.bind(this)
        this.onchangeage=this.onchangeage.bind(this)
        this.onsubmit=this.onsubmit.bind(this)

        this.state ={
            username: '',
            age: 0
        }
    }
    onchangeusername(e){
        this.setState({
            username:e.target.value
        })
    }
    onchangeage(e){
        this.setState({
            age:e.target.value 
        })
    }
    onsubmit(e){
        e.preventDefault()
        const user = {
            username:this.state.username,
            age:this.state.age
        }
        console.log(user)
        window.location = '/'
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onsubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="username" value={this.state.username} onChange={this.onchangeusername} className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" value={this.state.age} onChange={this.onchangeage}className="form-control" placeholder="Enter age"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}