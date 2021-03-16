import React, { Component } from "react";

export default class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-light bg-light navbar-expand-lg">
            <a className="navbar-brand" href="/show">Users</a>
            <a className="navbar-brand" href="/add">Add User</a>
            
            </nav>
        )
    }
}