import React, { Component } from 'react'
import TopBar from './InBoxComponents/TopBar.jsx'
import NewMail from './InBoxComponents/NewMail.jsx'
import MailList from './InBoxComponents/MailList.jsx'
import MailView from './InBoxComponents/MailView.jsx'
import Reply from './InBoxComponents/Reply.jsx'
import '../../Sass/InBoxComponent.scss'

const InBoxComponent = ({ mailList, onInboxClick, onSentboxClick, onNewMailClick, onOneMessage, view, messageId, markAsReadClick, replyClick, deleteMessageClick }) => {

  const singleMail = id => mailList.find(message => message.id === id)

  return (
    <section className="main-post-window">
      <TopBar/>
      <div className="mailbox">
        <div className="inbox_buttons">
          <img
            src="../../../images/if_folder_1055055.png"
            alt=""
            className="folder"
            onClick={onInboxClick}
          />
          <img
            src="../../../images/if_compose_1055085.png"
            alt=""
            className="new_message"
            onClick={onNewMailClick}
          />
          <img
            src="../../../images/if_arrow-up_1055119.png"
            alt="Sent Messages"
            className="sent_messages"
            onClick={onSentboxClick}
          />
        </div>
        <section>
          {
            view === 'list' && <MailList
            mails={mailList}
            onOneMessage={onOneMessage}
            markAsReadClick={markAsReadClick}
            replyClick={replyClick}
            deleteMessageClick={deleteMessageClick}
            />
          }
          {
            view === 'newMail' && <NewMail/>
          }
          {
            view ==='oneMessage' && <MailView
            mail={singleMail(messageId)}
            deleteMessageClick={deleteMessageClick}
            replyClick={replyClick}/>
          }
          {
            view ==='reply' && <Reply mail={singleMail(messageId)} />
          }
        </section>
      </div>
    </section>
  )
}

export default InBoxComponent
