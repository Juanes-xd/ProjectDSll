import { Component } from "react";
import { CategoriasData } from "./CategoriasData";
import "../../Styles/CategoriasStyles.css"

class CategoriasNab extends Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

state= {clicked: false};
handleClick = () => {
  this.setState({clicked : !this.state.clicked})
}

  render(){
    return(
      <> 

<nav className="nav-categorias">
      <ul className={this.state.clicked ? "nav-menuC active":"nav-menuC"}>
          {CategoriasData.map((item,index)=>{
            return(
              <li key={index}>
            <a href={item.url} className={item.cName}>
              <i className={item.icon}></i>
              {item.title} 
            </a>
          </li>
            )
          })}
        </ul>
        </nav>
        </>
    )
}
}


export default CategoriasNab