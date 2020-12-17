import './App.scss';

import AnimatedDropdown from './components/AnimatedDropdown/AnimatedDropdown'

function App() {
  return (
    <div className="App">
      <AnimatedDropdown 
        title="MENU"
        list={['1','2','3','4','5']}
      />
    </div>
  );
}

export default App;
