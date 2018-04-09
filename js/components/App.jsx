import React, { Component } from 'react';
import axios from 'axios'
import SearchBox from './SearchBox.jsx';
import InBoxComponent from './InBoxComponent.jsx';
import '../../Sass/App.scss'
import moment from 'moment'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      token: '1ae0e55d-bbff-42de-90e6-0b9d671ce193',
      user: 'Dawid  Zieliński',
      mailList: [],
      inbox: [],
      sentbox: [],
      mailView: 'inbox',
      view: 'list',
      oneMessageId: null
    }
  }

  isReceived(message) {
    return message.sender !== this.state.user
  }

  isSent(message) {
    return message.sender === this.state.user
  }

  setInbox() {
    this.setState({
      mailView:"inbox",
      view: "list"
    })
  }

  setSentbox() {
    this.setState({
      mailView:"sentbox",
      view: "list"
    })
  }
  setOneMessage(id){
    this.setState({
      view:'oneMessage',
      oneMessageId: id
    })
  }

  setNewMailView() {
    this.setState({
      view: 'newMail'
    })
  }

  setReplyView(id) {
    this.setState({
      view: 'reply',
      oneMessageId: id
    })
  }

  getAllMails() {
    axios
      .get('https://recruit-front-api.espeo.pl/inbox/messages/', {
        params: {
          token: this.state.token
        }})
      .then(payload => this.setState({mailList: payload.data}))
      .then(() => {
        const inbox = this.state.mailList.filter(this.isReceived.bind(this))
        this.setState({inbox: inbox})

        const sent = this.state.mailList.filter(this.isSent.bind(this))
        this.setState({sentbox: sent})
      })
  }

  markAsRead(id) {
    const data = { displayed: moment().format('YYYY-MM-DD HH:MM:SS') }
    axios
      .patch(`https://cors-anywhere.herokuapp.com/recruit-front-api.espeo.pl/inbox/messages/${id}`,{
        params:{
          token: this.state.token,
        },
        data: JSON.stringify(data)
      })
   }

   deleteMessage(id) {
     axios
       .delete(`https://cors-anywhere.herokuapp.com/recruit-front-api.espeo.pl/inbox/messages/${id}`,{
         params:{
           token: this.state.token
       }})
       .then(response=>console.log(response))}

  componentWillMount() {
    this.getAllMails()
  }



  render() {
    return (
      <section>
        <SearchBox/>
        <InBoxComponent
        markAsReadClick={this.markAsRead.bind(this)}
        onInboxClick={this.setInbox.bind(this)}
        onSentboxClick={this.setSentbox.bind(this)}
        onNewMailClick={this.setNewMailView.bind(this)}
        deleteMessageClick={this.deleteMessage.bind(this)}
        onOneMessage={this.setOneMessage.bind(this)}
        view={this.state.view}
        messageId={this.state.oneMessageId}
        mailList={this.state.mailView === 'inbox'? this.state.inbox : this.state.sentbox}
        replyClick={this.setReplyView.bind(this)}
        />
      </section>
    )
  }
}
export default App;
