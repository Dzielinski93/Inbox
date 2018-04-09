import React, {Component} from 'react';
import '../../../Sass/TopBar.scss'

class TopBar extends React.Component {

  render() {
    
    return (
      <section className="top_bar">
        <div className='title_container'>
          <div className="mail_image">
            <img src="../../../images/if_mail_1055030.png" alt="" className="mail_picture"/>
          </div>
          <h1>InBox</h1>
        </div>
        <div className="min-x_container">
          <span className="min">_</span>
          <span className="close">X</span>
        </div>
      </section>
    )
  }
}
export default TopBar;
