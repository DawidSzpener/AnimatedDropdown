import './App.scss';

import AnimatedDropdown from './components/AnimatedDropdown/AnimatedDropdown'
import foto from './assets/images/dawid.jpg'

function App() {
  return (
    <div className="App">
      <div style={{display: 'inline-block', marginLeft: '100px'}}>
      <AnimatedDropdown 
        shape='rectangle'
        title="MENU"
        list={[{value: 'Profile', id: 1}, {value: 'Settings', id: 2}, {value: 'Help', id: 3}, {value: 'Logout', id: 4}]}
      />
      </div>
      <div style={{display: 'inline-block', marginLeft: '300px' }}>
      <AnimatedDropdown 
        position="left"
        shape='rectangle'
        title="MENU"
        list={[{value: 'Profile', id: 1}, {value: 'Settings', id: 2}, {value: 'Help', id: 3}, {value: 'Logout', id: 4}]}
      />
      </div>      <div style={{float: 'left', marginLeft: '740px', marginTop: '-38px' }}>
      <AnimatedDropdown 
        position="right"
        picture={foto}
        shape='circle'
        title="MENU"
        list={[{value: 'Profile', id: 1}, {value: 'Settings', id: 2}, {value: 'Help', id: 3}, {value: 'Logout', id: 4}]}
      />
      </div>
    </div>
  );
}

export default App;
