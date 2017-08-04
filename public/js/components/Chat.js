import React from 'react'
import io from 'socket.io-client'
export default class Chat extends React.Component {
  constructor(){
    super();
    this.state = {
        messages: [],
        socket: io('http://localhost:3000'),
        user: undefined
    }
  };

  componentDidMount(){
    var self = this;
    this.state.socket.on('receive-message', function(msg){
      var messages = self.state.messages;
          messages.push(msg);
      self.setState(messages: messages);
    });
  };

  submitMessage(){
    var body = document.getElementById("message").value;
    var message = {
      body: body,
      user: this.state.user || 'guest'
    };
    this.state.socket.emit("new-message", message);
  };

  pickUser(){
    var user = document.getElementById('user').value;
    this.setState({user: user});
  };

  render(){

    var self = this;
    var i = 0;
    var messages = self.state.messages.map(function(msg){
      return <li key={i++}><span>{msg.user}</span>  {msg.body}</li>;
    });

    return(
      <div>
        <ul>
          {messages}
        </ul>
        <input id="message" type='text' placeholder="Message" /><button onClick={() => self.submitMessage()}> Send </button><br/>
        <input id="user" type='text' placeholder='Username' /><button onClick={() => self.pickUser()}>Lock username</button>
      </div>
    );
  }
}
