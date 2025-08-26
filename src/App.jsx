import { useState } from 'react'
import './App.css'
import teniscat1 from './assets/tenis.avif'
import tcorrida from './assets/tcorrida.avif'
import tsuede from './assets/tsuede.avif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header></header>
      <section className="produtos">
        
        {/* Card 1 */}
        <div className="card">
          <img src={teniscat1} alt="" className="img-card"/>
          <h2>Tênis Speedcat Wine Club Feminino</h2>
          <p className="desc">O PUMA Speedcat tem sido um ícone da cultura automobilística e do estilo de rua por décadas. O mundo o conheceu inicialmente como um calçado de corrida ultra-fino, projetado para reduzir milissegundos nos tempos de volta.</p>
          <p className="classificacao"> ★ ★ ★ ★ ☆ (482)</p>
          <p className="preco">R$ 699,99</p>
          <p className="off">- 5%</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={tcorrida} alt="" className="img-card"/>
          <h2>Tênis de Corrida ForeverRun NITRO™ 2 Masculino</h2>
          <p className="desc">Com amortecimento NITROFOAM™ e RUNGUIDE SYSTEM, o solado de borracha PUMAGRIP garante tração em várias superfícies, enquanto o cabedal em mesh projetado oferece respirabilidade e durabilidade.</p>
          <p className="classificacao"> ★ ★ ★ ★ ☆ (1.285)</p>
          <p className="preco">R$ 999,99</p>
          <p className="off">- 7%</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={tsuede} alt="" className="img-card"/>
          <h2>Tênis Suede XL Splatters Unissex</h2>
          <p className="desc">Combinando a durabilidade do original com uma nova entressola mais resistente e um cabedal acolchoado, o XL é adorado pelos skatistas, tanto no skate quanto fora dele.</p>
          <p className="classificacao"> ★ ★ ★ ★ ★ (864)</p>
          <p className="preco">R$ 599,99</p>
          <p className="off">- 9%</p>
        </div>

      </section>
      <section className="destaque"></section>
      <footer></footer>
     </main>
    </>
  )
}

export default App
