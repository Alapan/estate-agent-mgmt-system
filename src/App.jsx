import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Buyers from './pages/Buyers';
import Sellers from './pages/Sellers';
import Properties from './pages/Properties';

function App() {

  return (
    <BrowserRouter>
      <header className='site-header'>
        <div className='logo-container'>
          <img
            src='./home-logo.gif'
            alt='Logo for website'
            width={100}
            height={100}
            className='logo'
          />
        </div>
        <div className='heading-container'>
          <h2 className='heading'>homehub</h2>
          <small className='subheading'>Connecting buyers and sellers to manage properties</small>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/sellers' element={<Sellers />}/>
          <Route path='/buyers' element={<Buyers />} />
          <Route path='/properties' element={<Properties /> } />
        </Routes>
        <section className='icons-section'>
          <div className='icon-container'>
            <div className='image-container'></div>
            <img src='./seller.svg' width={140} height={140}/>
          </div>
          <Link to='/sellers'>Sellers</Link>
          <div className='icon-container'>
            <img src='./buyer.svg' width={140} height={140}/>
          </div>
          <div className='icon-container'>
            <img src='./property.svg' width={140} height={140}/>
          </div>
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App
