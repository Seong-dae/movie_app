import React from 'react';
import PropTypes from 'prop-types';


//기존에 function App() 일때는 return을 저절로 가졌지만
//class App로 바꾼 후에는 리액트 컴포넌트가 가지고있는 render함수를 써서 return해줌!
//리액트는 자동적으로 class컴포넌트의 render메소드를 실행한다 !!!!!!!!!!

class App extends React.Component{ // 리액트컴포넌트!!!!
  constructor(props){ // 렌더 이전에 호출됨. (순서 : constructor -> ~ -> render -> componentDidMount
    super(props);
    console.log("hello Im constructor")
  }
  state = {//데이터가 변하기때문에 state를 사용함, state는 클래스컴포넌트의 기능
    count: 0
  }
  //setState를통해서 페이지 새로고침이 아니라 render만 refresh해준다. 굿
  add = () => {this.setState(current => ({count: current.count + 1})); console.log("add!")} // current지원!

  minus = () => {this.setState({count: this.state.count - 1})}
  componentDidMount(){ // render이후에 호출
    console.log("component Mounted!!!!")
  }
  componentDidUpdate(){
    console.log("componentDid Update!")
  }
  componentWillUnmount(){
    console.log("good bye...")
  }
  render(){
    console.log("Im render")
    return(
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )  
  }
}



export default App;
