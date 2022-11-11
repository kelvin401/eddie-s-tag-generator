import * as React from 'react';
import './style.css';

export default function App() {
  const [img, SetImg] = React.useState(
    'https://s2.glbimg.com/z2D4JVEVzuGj0noeF-4t-evruUY=/0x141:2047x1292/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/B/8/8EugYKQ5efPwDuqPcXrg/52232492084-9a52f1aa27-k.jpg'
  );
  const [tagname, SetTagName] = React.useState('politica');

  return (
    <section className="showcase">
      <aside className="sidebar">
        <form action="">
          <div className="hero">
            <h1>Eddie's Tag Generator!</h1>
            <p>Create a simple tag for air bnb :)</p>
          </div>
          <input
            value={img}
            placeholder="cole a url da imagem aqui"
            onChange={(e) => SetImg(e.target.value)}
          />
          <input
            type="text"
            value={tagname}
            placeholder="escreva sua tag"
            onChange={(e) => SetTagName(e.target.value)}
          />
          <button>Gerar Imagem</button>
        </form>
      </aside>
      <div className="main" id="main">
        <section>
          {img && <p id="tag">{tagname}</p>}
          <img src={img} alt={img} />
        </section>
      </div>
    </section>
  );
}

