import React from "react";
export class NavLink extends React.Component {
  render() {
    return (<li key={this.props.inner} className={[this.props.mobileFlag, "navbar-link"].join(" ")}>
      <a href="/#">{this.props.inner}</a>
    </li>);
  }
}
