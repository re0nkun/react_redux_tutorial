import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class GrandChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myState1 : '孫state',
    };
    //子コンポーネントのステートを更新
    this.props.updateState(this.state.myState1);
  }
  render() {
    return (
      <div>
        孫:{this.state.myState1}
      </div>
    )
  }
}

//子コンポーネント
class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myState1 : null,
    };
  }
  updateState(state){
    this.setState({ myState1: state });
    //親コンポーネントを更新
    this.props.updateState(state);
  }
  render() {
    return (
      <div>
        子:{this.state.myState1}
        <GrandChildComponent 
          // updateState={this.updateState.bind(this)} 
          updateState={(state)=>this.updateState(state)} 
        />
      </div>
    )
  }
}

//親コンポーネント
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myState1 : null,
    };
  }
  // updateState(state){
  //   // this.setState(state);
  //   this.setState({myState1: state});
  // }
  updateState = (state) => {
    this.setState({myState1: state});
  } 
  render() {
    return (
      <div>
        親:{this.state.myState1}
        <ChildComponent 
          // updateState={this.updateState.bind(this)}  
          // updateState={this.updateState}  
          updateState={(state)=>this.updateState(state)}  
        />
      </div>
    )
  }
}

//コンポーネントの描画
ReactDOM.render(
  <ParentComponent />,
  document.getElementById('root')
)