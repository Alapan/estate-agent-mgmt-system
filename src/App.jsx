import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Buyers from './pages/Buyers';
import Sellers from './pages/Sellers';
import Properties from './pages/Properties';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import AddPropertyForm from './components/AddPropertyForm';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <header className='site-header'>
        <a className='logo-container' href='/'>
          <img
            src='./home-logo.gif'
            alt='Logo for website'
            width={100}
            height={100}
            className='logo'
          />
        </a>
        <a className='heading-container' href='/'>
          <h2 className='heading'>homehub</h2>
          <small className='subheading'>Connecting buyers and sellers to manage properties</small>
        </a>
      </header>
      <main>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sellers' element={<Sellers />}/>
          <Route path='/buyers' element={<Buyers />} />
          <Route path='/properties' element={<Properties searchResults={[]}/> } />
          <Route path='/sellers/register' element={<RegistrationForm userType={'Seller'}/>}/>
          <Route path='/buyers/register' element={<RegistrationForm userType={'Buyer'}/>} />
          <Route path='/properties/add' element={<AddPropertyForm/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
