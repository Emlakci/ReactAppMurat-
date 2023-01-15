import 'bootstrap/dist/css/bootstrap.min.css';
import Mycards from './Mycards';

import React from 'react'

function ProductCard() {
  return (
    <div className='container-fluid my-1 my-sm-3'>
        <div className="row border d-flex justify-content-center p-1 p-sm-2">
            <div className="col-12 d-flex flex-wrap justify-content-center p-2 px-0">
                <Mycards route="/img/productpics1.jpg" heading="🎂 Doğum Günü Pastaları 🎂" explanation="Kendi doğum gününüz veya ailenizden, arkadaşlarınızdan, sevdiklerinizin doğum günü kutlaması için doğum günü pastası mı arıyorsunuz? Doğru adrestesiniz" ></Mycards>
                <Mycards route="/img/productpics2.jpg" heading="🎂 Tasarım Pastalar 🍰" explanation="Pastanız sadece size özel olsun mu istersiniz? Sizin için sizi yansıtan pastalar yapalım. Sadece size özel..." ></Mycards>
                <Mycards route="/img/slider2.jpeg" heading="🍰 Özel Gün Pastaları 🍰" explanation="Özel günlerinizde, sevdiklerinizi özel hissettirmek ve lezzetine doyamayacağınız harika pastalarımızın tadına bakmak istiyorsanız, siparişlerinizi bekliyoruz." ></Mycards>
                <Mycards route="/img/slider9.jpeg" heading="🍪 Cookies 🍪" explanation="Rengarenk, çeşit çeşit. BUTİK KURABİYELER. En renkli, en lezzetli ve en önemlisi en doğal ev yapımı butik kurabiyelerimizi görmediniz mi?" ></Mycards>            
            </div>
        </div>
    </div>
  )
}

export default ProductCard