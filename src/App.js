import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [euros, setEuros] = useState(0);
  const [dolares, setDolares] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(tipo);
    if(tipo == 1){
      setEuros(total * 1);
      setDolares(total * 1.17);
      setBitcoin(total * 0.000025);
    }else if(tipo == 2){
      setEuros(total * 0.85);
      setDolares(total * 1);
      setBitcoin(total * 0.000022);
    }else{
      setEuros(total * 39533.19);
      setDolares(total * 46400.30);
      setBitcoin(total * 1);
    }
  }, [total, tipo]);

  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };
  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>
      <p>Euros: {euros}</p>
      <p>Dolares: {dolares}</p>
      <p>Bitcoin: {bitcoin}</p>
      <hr />
      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Euro</option>
        <option value={2}>Dolares</option>
        <option value={3}>Bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
