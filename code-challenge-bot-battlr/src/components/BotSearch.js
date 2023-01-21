import React, { Component } from 'react';
import Filter from './Filter';

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
        <div class="container">
            <nav class="navbar navbar-light ">
                 <div class="container-fluid ">
                      <a class="navbar-brand fw-bold ">BOT-BATTLR</a>
                         <form class="d-flex">
                         <input class="form-control me-4" placeholder="Search For Bot" aria-label="Search" value={this.state.query} type="text" onChange={event => this.handleChange(event)}></input>
                               <button class="btn btn-success"  onClick={event => this.handleSearch(event)} type="submit">Search</button>
                         </form>
                 </div>
            </nav>
        </div>
        );
    }
}

export default BotSearch;