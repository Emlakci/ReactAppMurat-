import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styleBanner.module.css'

function Banner() {
    return (
      <div>
        <div className='container-fluid' >
          <div className="row justify-content-center">
            <div className="col-sm-8 text-center p-md-3">
              <h3 className='display-6 fw-bold'>Hayallerinizi Tasarlıyoruz</h3>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-8">
              <Carousel className={styles.sliderBox}>
                <Carousel.Item>
                  <img
                  className="d-block p-2"
                  src="/img/productpics1.jpg"
                  width="100%"
                  height="500px"
                  alt="First slide"/>
                  <Carousel.Caption className={styles.fonts}>
                  <h3 className={styles.pclass}>Kremalı Pastalardan</h3><br />
                  <p className={styles.p2class}>Bir Masaldan Çıkıp Gelen Pamuk Prenses...</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                  className="d-block p-2"
                  src="/img/productpics2.jpg"
                  width="100%"
                  height="500px"
                  alt="Second slide"/>
                  <Carousel.Caption className={styles.fonts}>
                  <h3 className={styles.pclass}>Elfler Diyarı</h3><br />
                  <p className={styles.p2class}>Sanat Eserine Dönüşen Hayaller</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                  className="d-block p-2"
                  src="/img/slider4.jpg"
                  width="100%"
                  height="500px"
                  alt="Third slide"/>
                  <Carousel.Caption className={styles.fonts}>
                  <h3 className={styles.pclass}>Bir Genç Kızın Hayali</h3><br />
                  <p className={styles.p2class}>Siz Hayalinizdekini Anlatın, Biz Pastasını Yapalım...</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles.fonts}>
                  <img
                  className="d-block p-2"
                  src="/img/slider5.jpg"
                  width="100%"
                  height="500px"
                  alt="Fourth slide"/>
                  <Carousel.Caption className={styles.fonts}>
                  <h3 className={styles.pclass}>Yaz Neşesi...</h3><br />
                  <p className={styles.p2class}>Her Mevsim Yaz Yaşamak İsteyenlere</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                  className="d-block p-2"
                  src="/img/slider3.jpeg"
                  width="100%"
                  height="500px"
                  alt="Fifth slide"/>
                  <Carousel.Caption className={styles.fonts}>
                  <h3 className={styles.pclass}>Denizler Kraliçesi</h3><br />
                  <p className={styles.p2class}>Mavi Derinliklere Yelken Açmak İsteyenlere</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
}
    export default Banner;