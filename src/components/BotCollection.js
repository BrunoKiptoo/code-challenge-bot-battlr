// import React from "react";

// function BotCollection() {
//   // Your code here
//   return (
//     <div className="ui four column grid">
//       <div className="row">
//         {/*...and here..*/}
//         Collection of all bots
//       </div>
//     </div>
//   );
// }

// export default BotCollection;


// import React from "react";
// import BotCard from "../components/BotCard";

// class BotCollection extends React.Component {
// 	renderBots = () => {
// 		return this.props.bots.map(bot => {
// 			return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>
// 		})
// 	}

//   render(){
//   	return (
//   	  <div className="ui five column grid ">
//     		<div className="row row-cols-1 row-cols-md-2 g-4">
//     		  {this.renderBots()}
//     		</div>
//   	  </div>
//   	);
//   }

// };

// export default BotCollection;


import React from "react";
import BotCard from "../components/BotCard";
import 'bootstrap/dist/css/bootstrap.min.css';

class BotCollection extends React.Component {
  renderBots = () => {
    const fourBots = this.props.bots;
    return fourBots.map(bot => {
      return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>
    })
  }

  render(){
    return (
      <div className="container ">
        <div className="row card-header bg-transparent">
          {this.renderBots()}
        </div>
      </div>
    );
  }
};

export default BotCollection;
