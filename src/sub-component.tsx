import * as React from 'react';

// Propsの型定義
interface IProps {
  name: string;
}

interface IState {
  count: number;
}

class SubComponent extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <div>{count}</div>
        <button type="button" onClick={this.handleClick.bind(this)}>Add +1</button>
      </div>
    );
  }
}

export default SubComponent;
