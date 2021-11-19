import React from 'react';

class PureComp extends React.PureComponent{
  render(){
    console.log('PureComp 渲染了');
    return<div>{this.props.name}</div>;
  }
}

class NoPureComp extends React.Component{
  render(){
    console.log('NoPureComp 渲染了');
    return<div>{this.props.name}</div>;
  }
}

export class PureComponentDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Mayank',
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Mayank',
      });
    }, 1000);
  }

  render() {
    console.log('Render Called Again');
    return (
      <>
        <PureComp name={this.state.name} />
        <NoPureComp name={this.state.name} />
      </>
    );
  }
}
