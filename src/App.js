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
      <div style={{display: 'inline-block', marginLeft: '370px' }}>
      <AnimatedDropdown 
        headerPosition="right"
        shape='rectangle'
        title="MENU"
        list={[{value: 'Profile', id: 1}, {value: 'Settings', id: 2}, {value: 'Help', id: 3}, {value: 'Logout', id: 4}]}
      />
      </div>      <div style={{float: 'left', marginLeft: '750px', marginTop: '-65px' }}>
      <AnimatedDropdown 
        picture={foto}
        shape='circle'
        list={[{value: 'Profile', id: 1}, {value: 'Settings', id: 2}, {value: 'Help', id: 3}, {value: 'Logout', id: 4}]}
      />
      </div>
    </div>
  );
}

export default App;
