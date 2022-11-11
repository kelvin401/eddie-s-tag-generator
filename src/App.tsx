import * as React from 'react';
import './style.css';

export default function App() {
  const [img, SetImg] = React.useState('');
  const [tagname, SetTagName] = React.useState('');

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

