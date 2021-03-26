import React from "react";

function Searchbox({handleSearchboxChange}) {
    return (
     
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Search</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange = {e => handleSearchboxChange(e)}></input>
            </div>
    )
}

export default Searchbox;