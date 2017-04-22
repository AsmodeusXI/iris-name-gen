const React = require('react');

const Tab = require('./tabs/tab_component');
const Generator = require('./generator/generator_component');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generatorType: 'human'
    };

    this.handleGeneratorTypeSelection = this.handleGeneratorTypeSelection.bind(this);
  }

  handleGeneratorTypeSelection(type) {
    this.setState({
      generatorType: type
    });
  }

  render() {
    return (
      <div className='iris-generator'>
        <h1>Iris Name Generator</h1>
        <article name='main'>
          <section id='tabs'>
            <Tab
              type="human"
              onTypeSelect={this.handleGeneratorTypeSelection}
            />
            <Tab
              type="elf"
              onTypeSelect={this.handleGeneratorTypeSelection}
            />
          </section>
          <section id='generator'>
            <Generator type={this.state.generatorType}/>
          </section>
        </article>
      </div>
    )
  }
}

module.exports = App;
