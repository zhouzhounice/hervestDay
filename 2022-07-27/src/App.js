import './App.css';
import { Tabs } from 'antd';
import ArrayMethod from './pages/AboutArray/ArrayMethod.tsx';
import UseApi from './pages/About_useRef/UseApi.tsx';
const { TabPane } = Tabs

function App() {

  const onChange = (key) =>{
    console.log(key)
  }
  return (
    <div className="App">
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="复杂数组求差集" key="1">
          <ArrayMethod />
        </TabPane>
        <TabPane tab="useRef的使用" key="2">
          <UseApi />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default App;
