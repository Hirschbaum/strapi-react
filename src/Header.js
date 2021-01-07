import React from "react";

function Header (){
    return(
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Home</a></li>
                        <li><a className="dropdown-item" href="#">Products</a></li>
                        <li><a className="dropdown-item" href="#">All</a></li>
                        <li><a className="dropdown-item" href="#">Coats and jackets</a></li>
                        <li><a className="dropdown-item" href="#">Shirts and blouses</a></li>
                        <li><a className="dropdown-item" href="#">Jeans and pants</a></li>
                        <li><a className="dropdown-item" href="#">Sweaters and hoodies</a></li>
                        <li><a className="dropdown-item" href="#">Accessories</a></li>
                        <li><a className="dropdown-item" href="#">Shoes</a></li>
                        <li><hr className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Cart</a>
                </li>
            </ul>
        </div>
    )
}