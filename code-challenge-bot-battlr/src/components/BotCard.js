// import React from "react";

// const botTypeClasses = {
//   Assault: "icon military",
//   Defender: "icon shield",
//   Support: "icon plus circle",
//   Medic: "icon ambulance",
//   Witch: "icon magic",
//   Captain: "icon star",
// };

// function BotCard({ bot }) {
//   return (
//     <div className="ui column">
//       <div
//         className="ui card"
//         key={bot.id}
//         onClick={() => console.log("add code to connect event listener")}
//       >
//         <div className="image">
//           <img alt="oh no!" src={bot.avatar_url} />
//         </div>
//         <div className="content">
//           <div className="header">
//             {bot.name}
//             <i className={botTypeClasses[bot.bot_class]} />
//           </div>
//           <div className="meta text-wrap">
//             <small>{bot.catchphrase}</small>
//           </div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat" />
//             {bot.health}
//           </span>

//           <span>
//             <i className="icon lightning" />
//             {bot.damage}
//           </span>
//           <span>
//             <i className="icon shield" />
//             {bot.armor}
//           </span>
//           <span>
//             <div className="ui center aligned segment basic">
//               <button
//                 className="ui mini red button"
//                 onClick={() =>
//                   console.log("add code to connect event listener")
//                 }
//               >
//                 x
//               </button>
//             </div>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BotCard;


import React from "react";

const BotCard = props => {
  const { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => props.addBot(bot)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;