import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.username === '' || this.state.password === '') {
      console.log('Field(s) must not be empty!');
    } else {
      console.log('Successfully submitted!');
    }
  }

  handleChange = (key, value) => {
    this.setState((state) => {
      state[key] = value
      return state
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={(e)=>{this.handleChange('username', e.target.value)}}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={(e)=>{this.handleChange('password', e.target.value)}}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
