class ListCard extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = {
        list: []
      }
    }
    
    componentDidMount() {
      axios.get('https://google.com')
    }
    
    addToList() {
      var list = [...this.state.list];
      list.push(this.newItem.value);
      this.setState({list});
      
      this.newItem.value = ''
    }
    
    render() {
      return <div className="box">
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
  
        
        <input ref={(ip) => {this.newItem = ip}}></input>
        
        <button onClick={this.addToList.bind(this)}>Add</button>
        
      </div>;
    }
    
  }
  
  const el = document.querySelector("#root");
  ReactDOM.render(<ListCard />, el);