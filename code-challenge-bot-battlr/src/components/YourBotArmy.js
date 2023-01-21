// import React from "react";

// function YourBotArmy() {
//   //your bot army code here...

//   return (
//     <div className="ui segment inverted olive bot-army">
//       <div className="ui five column grid">
//         <div className="row bot-army-row">
//           {/*...and here...*/}
//           Your Bot Army
//         </div>
//       </div>
//     </div>
//   );
// }

// export default YourBotArmy;


import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
	renderBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>
		})
  }
  
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;