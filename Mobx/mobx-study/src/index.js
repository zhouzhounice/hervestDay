import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { observable,action } from 'mobx';
import {observer} from 'mobx-react'

// 初始化 mobx 容器仓库
// 在组件中使用mobx 容器状态
// 在组件中发起action修改容器状态

class Store {
  @observable count = 0
  @action.bound increment(){
    this.count++
  }
}

@observer
class App extends React.Component {
  render(){
    const {store} = this.props
    return <div>
      <h1>App Component</h1>
      <p>{store.count}</p>
      <button onClick={store.increment}>Increment</button>
    </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={new Store()} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
