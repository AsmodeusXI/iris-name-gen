const React = require('react');

class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {names: []};
  }

  handleClick() {
    let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let listItems = [];
    for(let item of list) {
      listItems.push(`${this.props.type}-${item}: ${Math.random()}`);
    }
    let names = listItems.map((item) =>
      <li>{item}</li>
    );
    this.setState({names: names});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.setState({names: []});
    }
  }

  render() {
    let generatorType = `${this.props.type}-gen`;
    return (
      <div className="generator-wrapper" id={generatorType}>
        <p>{this.props.type}</p>
        <button onClick={this.handleClick}>Generate</button>
        <div id="name-list">
          {this.state.names.length > 0 &&
            <ul>{this.state.names}</ul>
          }
        </div>
      </div>
    )
  }
}

module.exports = Generator;
