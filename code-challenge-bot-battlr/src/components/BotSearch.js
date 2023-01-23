// import React, { Component } from 'react';
import React, { Component } from 'react';

// import Filter from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';


class BotSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: ''
        }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.handleChange(event.target.value)
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.handleClear(this.state.query)
        this.setState({
            query: ''
        })
    }

    render() {
        return (
        <div class="container ">
            <nav class="navbar navbar-light ">
                
                 <div class="container-fluid " >
                 <img src="https://www.freepnglogos.com/uploads/robot-png/vector-robot-character-set-vector-characters-14.png"  alt="logo" className='object-fit-contain' style={{width:"150px", height: "150px"}} ></img>
                      {/* <a class="navbar-brand fw-bold ">BOT-BATTLR</a> */}
                      {/* <div class="navbar-logo" style="width: 50px; height: 50px;"> */}
                     
                      {/* </div> */}
                         <form class="d-flex">
                         <input class="form-control me-4 custom-blue-bg6"  input name="query" placeholder="Search For Bot" aria-label="Search" value={this.state.query} type="text" onChange={event => this.handleChange(event)}></input>
                         <div class="col-12 col-sm-2">
                               <button class="btn btn-primary btn-lg btn-block d-block d-sm-noneo "  onClick={event => this.handleSearch(event)} type="submit">Search</button>
                         </div>
                         </form>
                 </div>
            </nav>
        </div>
        );
    }
}

export default BotSearch;