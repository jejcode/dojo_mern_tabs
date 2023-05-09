import './App.css';
import {useState} from 'react'
import Tabs from './Components/Tabs';

function App() {
  const [currentTabs, setCurrentTabs] = useState([
    {label: 'About', content: `I'm a former teacher training to be a software developer`},
    {label: 'Skills', content: 'Customer experience, Project management, Team vision building'},
    {label: 'Contact', content: 'Call me at 555-5555'}
  ])
  
  const onChangeTabs = (newTabsObject) => {
    setCurrentTabs(newTabsObject)
  }
  return (
    <div className='container col-6 mt-4'>
      <Tabs currentTabsGroup={ currentTabs } changeTabsGroup={ onChangeTabs }/>
    </div>
  );
}

export default App;
