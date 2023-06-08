import './index.css'
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {
    isLoggedIn: false,
    message: 'Please Login',
  }

  handlerFunc = () => {
    console.log('onclick activated')
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
      message: !prevState.isLoggedIn ? 'Welcome User' : 'Please Login',
    }))
  }

  render() {
    const {isLoggedIn, message} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <Message message={message} />
          {/* {isLoggedIn ? (
            <Logout onClick={this.handlerFunc} />
          ) : (
            <Login onClick={this.handlerFunc} />
          )} */}
          <Login onClick={this.handlerFunc} />
        </div>
      </div>
    )
  }
}

export default Home
