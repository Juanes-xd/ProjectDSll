import { Component } from "react";
import { MenuData } from  "./MenuData"
import { CategoriasData } from "./CategoriasData";
import "../../Styles/NavbarStyles.css"
import "../../Styles/CategoriasStyles.css"

class Navbar extends Component{

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

      <nav className="NavbarItems">
        <h1 className="logo">FerroElectricos <i className="fa-solid fa-screwdriver-wrench"></i></h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {/* <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Buscar" />
      </form> */}
        <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
          {MenuData.map((item,index)=>{
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

export default Navbar