import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(this.props);
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location, history } = this.props;
    return <div className="movie__detail">{location.state.title}</div>;
  }
}

export default Detail;
