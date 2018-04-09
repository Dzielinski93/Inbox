import React, {Component} from 'react'
import '../../../Sass/MailView.scss'

const MailView = ({ mail, deleteMessageClick, replyClick }) => (
 <section className="oneMail-container">
  <div className='oneMail-section'>
    <div className='oneMail-buttons'>
      <img
        src="../../../../images/if_denied_1055074.png"
        alt="Delete"
        onClick={() => deleteMessageClick(mail.id)} />
      <img
        src="../../../../images/if_compose_1055085.png"
        alt="Reply"/>
    </div>
    <div className="single_message">
      <div className="from-date_container">
        <h2 className="mail_from">From: {mail.sender}
        </h2>
        <p className="date">Date: {mail.created}
        </p>
      </div>
      <hr/>
      <div className="mail-title_cointainer">
        <h3>{mail.subject}</h3>
      </div>
      <div className="mail-text_container-view">
        <p>{mail.message}</p>
      </div>
    </div>
  </div>
 </section>
)
export default MailView;
