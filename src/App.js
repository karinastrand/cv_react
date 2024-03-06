import LeftSide from './Components/LeftSide';
import RightSide from './Components/RightSide';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className='flex-container'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
