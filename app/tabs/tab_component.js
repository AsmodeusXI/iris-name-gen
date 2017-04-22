const React = require('react');

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onTypeSelect(this.props.type);
  }

  getDisplayName(str) {
    let firstCapital = str.charAt(0).toUpperCase();
    let firstLetterRemoved = str.slice(1);
    return `${firstCapital}${firstLetterRemoved}`;
  }

  render() {
    let tabName = `${this.props.type}-tab`;
    return (
      <div className="tab" id={tabName} onClick={this.handleClick}>
        {this.getDisplayName(this.props.type)}
      </div>
    )
  }
}

module.exports = Tab;
