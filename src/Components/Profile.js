import React from "react";
export class Profile extends React.Component {
  render() {
    return (
      <>
        {" "}
        <h1>{this.props.name}</h1>
        <h1>{this.props.profession}</h1>
        <img src={this.props.imgSrc} style={{ width: "500px" }} />
      </>
    );
  }
}
// export default Profile;
