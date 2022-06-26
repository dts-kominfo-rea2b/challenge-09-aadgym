import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Header from './components/Header'
import Contact from "./components/Contact";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
    const  dataKontak = contacts.map(kontak => (<Contact data={kontak} />));
  return (
    <div className="App">
        <Header />
        <div className="ContactContainer">
            {dataKontak}
        </div>
        {/*<Contact data={contacts[0]} />*/}
    </div>
  );
}

export default App;
