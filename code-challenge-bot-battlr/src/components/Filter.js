// import React, { Component } from 'react';

// class Filter extends Component {
//     handleChange = (event) => {
//         this.props.filterChange(event.target.value)
//     }

//     render() {
//         return (
//                 <select onChange={event =>this.handleChange(event)}>
//                     <option value="All" >All</option>
//                     <option value="Assault" >Assault</option>
//                     <option value="Defender">Defender</option>
//                     <option value="Support">Support</option>
//                 </select>
//         );
//     }
// }

// export default Filter;

import React, { Component } from 'react';

class Filter extends Component {
    handleChange = (event) => {
        this.props.filterChange(event.target.value)
    }

    render() {
        return (
                <div class = "form-floating col-sm-2 container-fluid justify-content-md-end">
                  
                  <select class = "form-select" id="Open Select Menu To Filter" onChange={event =>this.handleChange(event)} aria-label="Floating label select example">
                    <option value="All" >All</option>
                    <option value="Assault" >Assault</option>
                    <option value="Defender">Defender</option>
                    <option value="Support">Support</option>
                  </select>
                  <label for = "floatingSelect" htmlFor="">Filter by:</label>
                </div>
        );
    }
}

export default Filter;
