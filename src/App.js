import './App.scss';

import AnimatedDropdown from './components/AnimatedDropdown/AnimatedDropdown'
import foto from './assets/images/dawid.jpg'

function App() {
  return (
    <div className="App">
      <div style={{display: 'inline-block', marginLeft: '100px'}}>
      <AnimatedDropdown 
        shape="rectangle"
        theme="blue"
        title="MENU"
        list={[{value: 'Profile', id: 1}, {value: 'Settings', id: 2}, {value: 'Help', id: 3}, {value: 'Log out', id: 4}]}
      />
      </div>
      <div style={{display: 'inline-block', marginLeft: '370px' }}>
      <AnimatedDropdown 
        shape="rectangle"
        theme="blue"
        headerPosition="right"
        title="MENU"
        list={[
          {value: 'Profile', id: 1},
          {value: 'Settings', id: 2},
          {value: 'Help', id: 3},
          {value: 'Log out', id: 4}]}
      />
      </div>
      <div style={{float: 'left', marginLeft: '750px', marginTop: '-65px' }}>
      <AnimatedDropdown 
        shape="circle"
        theme="blue"
        picture={foto}
        list={[
          {value: 'Profile', id: 1},
          {value: 'Settings', id: 2},
          {value: 'Help', id: 3},
          {value: 'Log out', id: 4}]}
      />
      </div>
    </div>
  );
}

export default App;
