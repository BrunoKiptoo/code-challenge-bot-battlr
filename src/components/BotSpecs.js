// import React from "react";

// const botTypeClasses = {
//   Assault: "icon military",
//   Defender: "icon shield",
//   Support: "icon plus circle",
//   Medic: "icon ambulance",
//   Witch: "icon magic",
//   Captain: "icon star",
// };

// function BotSpecs({ bot }) {
//   return (
//     <div className="ui segment">
//       <div className="ui two column centered grid">
//         <div className="row">
//           <div className="four wide column">
//             <img
//               alt="oh no!"
//               className="ui medium circular image bordered"
//               src={bot.avatar_url}
//             />
//           </div>
//           <div className="four wide column">
//             <h2>Name: {bot.name}</h2>
//             <p>
//               <strong>Catchphrase: </strong>
//               {bot.catchphrase}
//             </p>
//             <strong>
//               Class: {bot.bot_class}
//               <i className={botTypeClasses[bot.bot_class]} />
//             </strong>
//             <br />
//             <div className="ui segment">
//               <div className="ui three column centered grid">
//                 <div className="row">
//                   <div className="column">
//                     <i className="icon large circular red heartbeat" />
//                     <strong>{bot.health}</strong>
//                   </div>
//                   <div className="column">
//                     <i className="icon large circular yellow lightning" />
//                     <strong>{bot.damage}</strong>
//                   </div>
//                   <div className="column">
//                     <i className="icon large circular blue shield" />
//                     <strong>{bot.armor}</strong>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               className="ui button fluid"
//               onClick={() =>
//                 console.log("connect this to a function that shows all bots")
//               }
//             >
//               Go Back
//             </button>
//             <button
//               className="ui button fluid"
//               onClick={() =>
//                 console.log(
//                   "connect this to a function that adds this bot to your bot army list"
//                 )
//               }
//             >
//               Enlist
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BotSpecs;


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const BotSpecs = props => {
  let { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div class="ui segment ">
      <div className="ui two column centered grid custom-blue-bg5">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered custom-blue-bg4"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column ">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class} {botType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() => props.clearSpec()}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>props.addBot(bot)}
            >
              {bot.owned ? "Remove From Army" : "Enlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default BotSpecs;