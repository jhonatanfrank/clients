import { useEffect, useState } from 'react';
import User from './Components/User';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  const [equipo, setEquipo] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    //const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await fetch("https://jsonplaceholder.typicode.com/users/")

    const users = await data.json()
    /**Impresion en consola */
    console.log(users)
    setShow(true)
    setEquipo(users)
  }

  return (

    <>
      {show === true ? (
        <>
          <Navbar />
          <div className="container">
            <>
              {equipo.map((parametro, index) =>
                <User
                  key={index}
                  id={parametro.id}
                  name={parametro.name}
                  username={parametro.username}
                  email={parametro.email}
                  phone={parametro.phone}
                  street={parametro.address.street}
                  className="container-user"
                />
              )}
            </>
          </div>
          <br />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <h1>Cargando...</h1>
          <Footer />

        </>
      )
      }
    </>
  );
}

export default App;
