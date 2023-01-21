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


import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	renderBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;