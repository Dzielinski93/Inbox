import React, {Component} from 'react';
import axios from 'axios'
import '../../../Sass/NewMail.scss'

class Reply extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '1ae0e55d-bbff-42de-90e6-0b9d671ce193',
      message: '',
      subject: '',
      sender: '',
      recipient: this.props.mail.sender
    }
  }

  //przekazać user do sendera

  postMail() {
    axios.post('https://recruit-front-api.espeo.pl/inbox/messages/', {
      params: {
        token: this.state.token,
        message: this.state.message,
        recipient: this.state.recipient,
        subject: this.state.subject,
        sender: "Dawid  Zieliński"
      }
    }).then(response => console.log(response)).catch(error => {
      console.log(error.response)
    });
  }

  changeInput = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <section>
        <div className='sentDetails' id="margin">
          <div className='styled-select blue semi-square'>
            <select name="recipients">
              <option value={this.state.recipient}>{this.state.recipient}</option>)}
            </select>
          </div>
          <div>
            <input type="text" name="subject" id="title" placeholder="Subject" onChange={this.changeInput.bind(this)} value={this.state.subject}/>
          </div>
        </div>
        <div className="new-mail-text">
          <textarea placeholder="Enter your message..." id="text" name="message" rows="4" onChange={this.changeInput.bind(this)} value={this.state.message} style={{
            overflow: 'hidden',
            resize: 'none',
            height: '130px',
            wordWrap: 'break-word'
          }}></textarea><br/>
          <button onClick={this.postMail.bind(this)} className='send-button'>
            Send
          </button>
        </div>
      </section>
    )
  }
}
export default Reply;
