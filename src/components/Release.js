import React, {Component} from 'react';


class Release extends Component {
  render(){
    return(
      <>
    
      <h1><a href={this.props.children}>{this.props.name}</a></h1>
      </>
    )
  }
}

export default Release;
