import React, {Component} from 'react';
import Release from './Release.js'

class ReleaseList extends Component {
  render(){
    const releaseArray = this.props.releases.map(release => {
      return(
        <Release name={release.name} key={release.id}>{release.url}</Release>
      )
    })
    return (
      <>
      <h2> List </h2>
      {releaseArray}
      </>
    )
  }
}

export default ReleaseList;
