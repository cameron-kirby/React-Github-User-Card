import React from 'react'
import axios from 'axios'

// Components //
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'
// Style //
import './App.css'

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  };

  componentDidMount() {
    // Get Main profile
    axios.get("https://api.github.com/users/cameron-kirby").then(res => {
      this.setState({
        user: res.data
      });
    });
    // Get Followers from main profile
    axios.get("https://api.github.com/users/cameron-kirby/followers").then(res => {
      this.setState({
        followers: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard user={this.state.user} />
    <h2>Followers: {this.state.followers.length}</h2>
        <div className="follower-list">
          {
            this.state.followers.map(user => (
              <FollowerCard user={user}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
