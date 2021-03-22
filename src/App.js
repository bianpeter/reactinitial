import React,{ useState, useEffect} from 'react'
import './App.css'
import Hotel from './components/Hotel';
import LoadingMask from './components/LoadingMask';

const App = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoad(false)

    //adatok behívása
    fetch("./api/hotels")
      .then(response => response.json())
      .then(data => setData (data))
      .catch(error => setData(null))
      .finally(() => setLoad(true))
  }, [])

  useEffect(() => {
    setTimeout(() => setShow(true), 2000)
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {
        !load
          ? <LoadingMask/>
          : data
            ?data.map(hotel => <Hotel key = {hotel.name} name = {hotel.name} city = {hotel.city} star={hotel.stars}/>)
            :<p>Cant load data</p>
      }
      {console.log(data)}
    </div>
  )
}

export default App
