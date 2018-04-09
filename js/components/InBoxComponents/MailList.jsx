import React, {Component} from 'react';
import Mail from './Mail.jsx'
import '../../../Sass/MailList.scss'

const MailList = ({ mails, onOneMessage, markAsReadClick, replyClick,  deleteMessageClick}) => (
      <section className="mail_list">
        <div className="mails">
          {mails.map(mail =>
            <Mail
              onOneMessage={onOneMessage}
              markAsReadClick={markAsReadClick}
              onClick={onOneMessage}
              sender={mail.sender}
              date={mail.created}
              message={mail.message}
              subject={mail.subject}
              isRead={mail.displayed}
              id={mail.id}
              key={mail.id}
              replyClick={replyClick}
              deleteMessageClick={deleteMessageClick}
            />)}
          </div>
      </section>
    )

export default MailList;
