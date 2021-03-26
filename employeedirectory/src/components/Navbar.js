import React from "react";
import Searchbox from "./Searchbox";
import "./navbar.css"

function Navbar({handleSearchboxChange}) {
    return (
     
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Employee Directory</a>
        <Searchbox handleSearchboxChange={handleSearchboxChange}/>
        <p>Click on headings to filter results or use searchbar to enter name</p>
        </div>
      </nav>
    )
}

export default Navbar;