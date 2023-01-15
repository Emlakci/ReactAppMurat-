import React from 'react';
import styles from './styleCard.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Mycards(props) {
  return (
      <div className={styles.card}>
        <div className={styles.circle}>
            <img className={styles.pics} src={props.route} alt="" srcset="" />
        </div>
        <div className={styles.cardBody}>
            <h3 className='fw-bold'> {props.heading} </h3>
            <p className="text-center"> {props.explanation} </p>
        </div>
        <div className={styles.cardBottom}>
            <button className={styles.btn} role="button">Hemen Sipariş Ver</button>
        </div>
      </div>
  )
}

export default Mycards