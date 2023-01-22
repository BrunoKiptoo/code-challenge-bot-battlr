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
import 'bootstrap/dist/css/bootstrap.min.css';


class YourBotArmy extends React.Component {
	renderBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>
		})
  }
  
  render(){
    return (
      <div class="ui segment bot-army " >
        <div className="ui five column grid custom-blue-bg6">
          <div class="row bot-army-row custom-blue-bg6">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;