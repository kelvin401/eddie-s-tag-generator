import * as React from 'react';
import './style.css';

export default function App() {
  const [img, SetImg] = React.useState('');
  const [tagname, SetTagName] = React.useState('');

  return (
    <main>
      <aside>
        <h1>Eddie's TAG Generator!</h1>
        <p>Create a simple tag for air bnb :)</p>

        <form action="#">
          <input
            type="text"
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
      <section>
        {img && <p id="tag">{tagname}</p>}
        <img src={img} alt="" />
      </section>
    </main>
  );
}
