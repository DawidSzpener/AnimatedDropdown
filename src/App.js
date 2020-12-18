import './App.scss';

import AnimatedDropdown from './components/AnimatedDropdown/AnimatedDropdown'

function App() {
  return (
    <div className="App">
      <div style={{marginLeft: '45%', marginTop: '20%'}}>
      <AnimatedDropdown 
        shape='rectangle'
        title="MENU"
        list={[{value: 'Profile', id: 1}, {value: 'Settings', id: 2}, {value: 'Help', id: 3}, {value: 'Logout', id: 4}]}
      />
      </div>
      <div style={{marginLeft: '25%', marginTop: '-8%'}}>
      <AnimatedDropdown 
        shape='circle'
        title="MENU"
        list={[{value: 'Profile', id: 1}, {value: 'Settings', id: 2}, {value: 'Help', id: 3}, {value: 'Logout', id: 4}]}
      />
      </div>
    </div>
  );
}

export default App;
