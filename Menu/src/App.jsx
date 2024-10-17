import './App.css'
import Card from './Card'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const zinger = {
    name: "Zinger", 
    img: "./src/assets/Zinger.png",
    description: "Zinger je v KFC klasika. Pro mnohé je to základ naší nabídky a vždy tou nejlepší volbou. Čerstvé kuře obalené v pikantní směsi, zelený salát, tradiční majonézová omáčka, vše uloženo v křupavé housce.",
    price: 123
  }

  const texaxGranger = {
    name: "Texas Grander",
    img: "",
    description: "Velká sezamová houska v sobě skrývá čerstvý ručně obalovaný kus kuřete, křupavou slaninu a dvě omáčky – ostrou BBQ a jemnou majonézovou. K tomu žlutý sýr čedar, lahodná červená cibule a křupavý zelený salát.",
    price: 135
  }

  const twister = {
    name: "Twister", 
    img: "",
    description: "Pikantní kuřecí prsíčka, kousky šťavnatého rajčete, křehký salát, jemná majonézová omáčka a skvělá tortilla.",
    price: 123
  }

  const qurrito = {
    name: "Qurrito",
    img: "",
    description: "Šťavnaté kousky kuřete, výrazný strouhaný sýr, BBQ omáčka. Vše zapečené v jemné pšeničné tortille.",
    price: 133
  }

  const products = [zinger, texaxGranger, twister, qurrito]

  return (
    <div>
      <h1 className='text-center'>Menu</h1>

      <ul>
        {
          products.map((element, index) =>
            <li key={index} className='list-unstyled'>
              <Card foodName={element.name} img={element.img} description={element.description} price={element.price}/>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default App