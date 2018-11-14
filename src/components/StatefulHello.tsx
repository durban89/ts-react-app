import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmlevel?: number;
}

interface State {
  currentEnthusiasmLevel: number;
}

class StatefulHello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentEnthusiasmLevel: props.enthusiasmlevel || 1,
    };
  }

  onIncrement = () => this.updateEnthusiasmLevel(this.state.currentEnthusiasmLevel + 1);

  onDecrement = () => this.updateEnthusiasmLevel(this.state.currentEnthusiasmLevel - 1);

  render() {
    const {
      name,
    } = this.props;

    if (this.state.currentEnthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic.');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasmLevel)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  updateEnthusiasmLevel(currentEnthusiasmLevel: number) {
    this.setState({
      currentEnthusiasmLevel,
    });
  }
}

export default StatefulHello;

function getExclamationMarks(numberMarks: number) {
  return Array(numberMarks + 1).join('!');
}