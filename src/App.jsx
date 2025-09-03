import { useState } from 'react'
import './App.css'
import teniscat1 from './assets/tenis.avif'
import tcorrida from './assets/tcorrida.avif'
import tsuede from './assets/tsuede.avif'
import LogoPuma from './assets/puma-icon-branco.png'
import LogoInsta from './assets/instagram-icon.svg'
import LogoFace from './assets/facebook-icon.svg'
import LogoTiktok from './assets/tiktok-icon.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header></header>
      <section className="produtos">
        
        {/* Card 1 */}
        <a href="#" className="link-card">
          <div className="card">
            <img src={teniscat1} alt="" className="img-card"/>
            <h2>Tênis Speedcat Wine Club Feminino</h2>
            <p className="desc">O PUMA Speedcat tem sido um ícone da cultura automobilística e do estilo de rua por décadas. O mundo o conheceu inicialmente como um calçado de corrida ultra-fino, projetado para reduzir milissegundos nos tempos de volta.</p>
            <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (482)</p>
            <p className="preco">R$ 699,99</p>
            <p className="off">- 5%</p>
          </div>
        </a>

        {/* Card 2 */}
        <a href="#" className="link-card">
          <div className="card">
            <img src={tcorrida} alt="" className="img-card"/>
            <h2>Tênis de Corrida ForeverRun NITRO™ 2 Masculino</h2>
            <p className="desc">Com amortecimento NITROFOAM™ e RUNGUIDE SYSTEM, o solado de borracha PUMAGRIP garante tração em várias superfícies, enquanto o cabedal em mesh projetado oferece respirabilidade e durabilidade.</p>
            <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (285)</p>
            <p className="preco">R$ 999,99</p>
            <p className="off">- 7%</p>
          </div>
        </a>

        {/* Card 3 */}
        <a href="#" className="link-card">
          <div className="card">
            <img src={tsuede} alt="" className="img-card"/>
            <h2>Tênis Suede XL Splatters Unissex</h2>
            <p className="desc">Combinando a durabilidade do original com uma nova entressola mais resistente e um cabedal acolchoado, o XL é adorado pelos skatistas, tanto no skate quanto fora dele.</p>
            <p className="classificacao"> <span>★ ★ ★ ★ ★</span> (864)</p>
            <p className="preco">R$ 599,99</p>
            <p className="off">- 9%</p>
          </div>
        </a>
      </section>
      
      <section className="destaque">

      <iframe src="https://www.youtube.com/embed/p7cDN1ofIw0?autoplay=1&mute=1&controls=0&loop=1&playlist=p7cDN1ofIw0&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

      </section>
      <footer>

        <img src={LogoPuma} alt="" className="logo-footer" />

        <div className="social-footer">
          <div className="icon-social"></div>
          <div className="icon-social"></div>
          <div className="icon-social"></div>
        </div>

        <p className="txt-footer">
        PUMA SPORTS LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864.
        </p>

      </footer>
     </main>
    </>
  )
}

export default App