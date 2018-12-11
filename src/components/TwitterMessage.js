import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      charsRemaining: props.maxChars,
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      maxChars: this.state.maxChars,
      charsRemaining: this.state.charsRemaining - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        <p>{this.state.charsRemaining} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
