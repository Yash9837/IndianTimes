import React, { Component } from 'react';
import './style.css';

export class Navbar extends Component {
    render() {
        
        return (
            <div>
                {/* <nav className="navbar navbar-expand-lg bg-dark" > */}
                <nav className="navbar navbar-expand-lg customNavbar" >
                    <div className="container-fluid " >
                        <a className="navbar-brand textcolor" href="/">Indian Times</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item textcolor">
                                    <a className="nav-link textcolor" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item textcolor">
                                    <a className="nav-link textcolor" href="/">Link</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

