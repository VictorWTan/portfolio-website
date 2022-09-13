import './Navbar.css'
import About from '../About/About'
import Resume from '../Resume/Resume'

export default function Navbar() {
  return (
    <nav className="nav-bar">
        <div className='header'>Header</div>
        <div className='menu'>
          <About about={'About'}/>
          <About about={'Experience'}/>
          <About about={'Projects'}/>
          <About about={'Contact'}/>
          <Resume/>
        </div>
    </nav>
  )
}
