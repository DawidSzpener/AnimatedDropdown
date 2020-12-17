import './App.scss';

import AnimatedDropdown from './components/AnimatedDropdown/AnimatedDropdown'

function App() {
  return (
    <div className="App">
      <AnimatedDropdown 
        title="MENU"
        list={[{value: '1', id: 1}, {value: '2', id: 2}, {value: '3', id: 3}, {value: '4', id: 4}]}
      />
    </div>
  );
}

export default App;
