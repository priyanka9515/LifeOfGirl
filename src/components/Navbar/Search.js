import React, { Component } from "react";
// import Icon from 'antd/es/icon';
class Search extends Component {
  render() {
    return (
      <div>
        <input
          className="search"
          placeholder="Look out for your peers here!"
          style={{ border: "1px solid black", width: "600px", height: "30px",marginLeft:"400px",marginTop:"3px" }}
        />
        {/* <Icon style = {{type:'search',marginleft:'-20px'}} />     */}
      </div>
    );
  }
}
export default Search;