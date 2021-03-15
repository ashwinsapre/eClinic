import React, { Component } from "react";

export default class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-light bg-light navbar-expand-lg">
            <a class="navbar-brand" href="/show">Users</a>
            <a class="navbar-brand" href="/add">Add User</a>
            
            </nav>
        )
    }
}