
import './App.css';
import Header from './Components/Header/index'
import LeftSection from './Components/LeftSection/index';
import RightSection from './Components/RightSection/index';

function App() {
  return (
    <div className="App">
        <Header />
        <hr/>
        <div className='main-section'>
          <LeftSection />
          <RightSection />
        </div>
        
    </div>
  );
}

export default App;
