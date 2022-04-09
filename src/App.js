import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [name, setName] = useState('');
  const [pepperoni, setPepperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [onions, setOnions] = useState(false);
  const [peppers, setPeppers] = useState(false);

  

  return (
    <div className="App">
      <div className='Order'>

        <h1>Pizza Order</h1>
        <form>
          <label>
          <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>
          </label>

          <label>
          <input type="checkbox"
            checked={pepperoni}
            onChange={() => setPepperoni(!pepperoni)}
          />
            Pepperoni
          </label>

          <label>
          <input type="checkbox"
            checked={sausage}
            onChange={() => setSausage(!sausage)}
          />
            Sausage
          </label>

          <label>
          <input type="checkbox"
            checked={peppers}
            onChange={() => setPeppers(!peppers)}
          />
            Peppers
          </label>

          <label>
          <input type="checkbox"
            checked={onions}
            onChange={() => setOnions(!onions)}
          />
            Onions
          </label>

          <button>Submit</button>
        </form>

      </div>
      <div className='display'>
        <h2>Your order</h2>
        <h3>{name}</h3>
        {pepperoni && <p>Pepperoni</p>}
        {sausage && <p>Sausage</p>}
        {peppers && <p>Peppers</p>}
        {onions && <p>Onions</p>}
      </div>
    </div>
  );
}

export default App;
