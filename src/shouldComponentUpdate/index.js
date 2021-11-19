import React from 'react';

export class ShouldComponentUpdateDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Mayank',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Mayank',
      });
    }, 10);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.age !== this.state.age || nextState.name === this.state.name) {
      return false;
    }
    return true;
  }

  render() {
    console.log('ShouldComponentUpdateDemo 渲染了');
    return (
      <div>
        <b>User Name:</b> {this.state.name}
      </div>
    );
  }
}
