// import logo from './logo.svg';
import './App.css';
import Fourth from './components/Fourth';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import SecondView from './components/SecondView';
import ThirdView from './components/ThirdView';

function App() {
  return (
    <div className="App bg-[rgb(238,242,255)]">
<Navbar />
<Hero />
<SecondView />
<ThirdView />
<Fourth/>
<Newsletter />
    </div>
  );
}

export default App;
