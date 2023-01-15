import React, { Component } from 'react'
import styles from './styleFooter.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.foot}>
        <h3 className='me-2'>Siparişleriniz için bize ulaşın</h3>
        <img src="/img/i-facebook.png" width="48" height="48" alt="" srcset="" />
        <img src="/img/i-instagram.png" width="48" height="48" alt="" srcset="" />
        <img src="/img/i-youtube.png" width="48" height="48" alt="" srcset="" />
        <img src="/img/i-whatsapp.png" width="48" height="48" alt="" srcset=""/>
      </div>
    )
  }
}
export default Footer; 