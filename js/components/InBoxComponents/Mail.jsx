import React, {Component} from 'react';
import cls from 'classnames'
import '../../../Sass/Mail.scss'



const Mail = ( { isRead, message, sender, date, subject, onOneMessage, id, key, markAsReadClick, replyClick, deleteMessageClick } ) => (
      <section className={cls({
        'mail-list-element': true,
        'unread': !isRead
      })} onClick={(e) => {
              e.stopPropagation()
              onOneMessage(id)
              }
            }
          id={id}
          key={key}>
      <div className="single_message">
        <div className="from-date_container">
          <h2 className="mail_from">From: {sender}</h2>
          <p className="date">Date: {date}</p>
        </div>
        <hr/>
        <div className="mail-title_cointainer">
          <h3>{subject}</h3>
        </div>
        <div className="mail-text_container">
          <p>{message}</p>
        </div>
        <div className="menu-dropdown">
          <img
          src="../../../../images/if_check_1055094.png"
          alt="Mark as read"
          onClick={(e) =>
            {e.stopPropagation()
            markAsReadClick({id})}} /><br/>
          <img
            src="../../../../images/if_compose_1055085.png"
            alt="Reply"
            onClick={(e) =>{
              e.stopPropagation()
              replyClick(id)}}/><br/>
          <img src="../../../../images/if_denied_1055074.png" alt="Delete" onClick={(e) =>
            {e.stopPropagation()
            deleteMessageClick({id})}}/>
          </div>
        </div>
      </section>

    )

export default Mail;
