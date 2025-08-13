import { useState } from 'react'
import './App.css'
import teniscat1 from './assets/tenis.avif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header></header>
      <section className="produtos">
        
        {/* Card 1 */}
        <div className="card">
          <img src={teniscat1} alt="" />
          <h2>Tênis Speedcat Wine Club Feminino</h2>
          <p className="desc">O PUMA Speedcat tem sido um ícone da cultura automobilística e do estilo de rua por décadas. O mundo o conheceu inicialmente como um calçado de corrida ultra-fino, projetado para reduzir milissegundos nos tempos de volta.</p>
          <p className="classificacao"> ★ ★ ★ ★ ☆ (482)</p>
          <p className="preco">R$ 699,99</p>
          <p className="off">5%</p>
        </div>

      </section>
      <section className="destaque"></section>
      <footer></footer>
     </main>
    </>
  )
}

export default App
