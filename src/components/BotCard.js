// // import React from "react";

// // const botTypeClasses = {
// //   Assault: "icon military",
// //   Defender: "icon shield",
// //   Support: "icon plus circle",
// //   Medic: "icon ambulance",
// //   Witch: "icon magic",
// //   Captain: "icon star",
// // };

// // function BotCard({ bot }) {
// //   return (
// //     <div className="ui column">
// //       <div
// //         className="ui card"
// //         key={bot.id}
// //         onClick={() => console.log("add code to connect event listener")}
// //       >
// //         <div className="image">
// //           <img alt="oh no!" src={bot.avatar_url} />
// //         </div>
// //         <div className="content">
// //           <div className="header">
// //             {bot.name}
// //             <i className={botTypeClasses[bot.bot_class]} />
// //           </div>
// //           <div className="meta text-wrap">
// //             <small>{bot.catchphrase}</small>
// //           </div>
// //         </div>
// //         <div className="extra content">
// //           <span>
// //             <i className="icon heartbeat" />
// //             {bot.health}
// //           </span>

// //           <span>
// //             <i className="icon lightning" />
// //             {bot.damage}
// //           </span>
// //           <span>
// //             <i className="icon shield" />
// //             {bot.armor}
// //           </span>
// //           <span>
// //             <div className="ui center aligned segment basic">
// //               <button
// //                 className="ui mini red button"
// //                 onClick={() =>
// //                   console.log("add code to connect event listener")
// //                 }
// //               >
// //                 x
// //               </button>
// //             </div>
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default BotCard;


// import React from "react";

// const BotCard = props => {
//   const { bot } = props;

//   let botType;

//   switch (bot.bot_class) {
//     case "Assault":
//       botType = <i className="icon military" />;
//       break;
//     case "Defender":
//       botType = <i className="icon shield" />;
//       break;
//     case "Support":
//       botType = <i className="icon ambulance" />;
//       break;
//     default:
//       botType = <div />;
//   }

//   return (
//     <div class="ui column ">
//       <div
//         class="ui card   " 
//         key={bot.id}
//         onClick={() => props.addBot(bot)}
//       >
//         <div className="image">
//           <img alt="oh no!" src={bot.avatar_url} />
//         </div>
//         <div className="content">
//           <div className="header">
//             {bot.name} {botType}
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
//         </div>
//       </div>
//     </div>
//   );

// };

// export default BotCard;

// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';


// const BotCard = props => {
//   const { bot } = props;

//   let botType;

//   switch (bot.bot_class) {
//     case "Assault":
//       botType = <i className="icon military" />;
//       break;
//     case "Defender":
//       botType = <i className="icon shield" />;
//       break;
//     case "Support":
//       botType = <i className="icon ambulance" />;
//       break;
//     default:
//       botType = <div />;
//   }

//   return (
    
//         <div
//           class=" col-sm-3 mb-4 card border-dark mb-3 card-header bg-transparent"
          
//           key={bot.id}
//           onClick={() => props.addBot(bot)}
//         >
//           <div class="image ">
//             <img alt="oh no!" src={bot.avatar_url} />
//           </div>
//           <div class="content fw-bold">
//             <div class="header">
//               {bot.name} {botType}
//             </div>

//             <div class="meta text-wrap">
//               <small>{bot.catchphrase}</small>
//             </div>
//           </div>
//           <div class="extra content">
//             <span>
//               <i class="icon heartbeat" />
//               {bot.health}
//             </span>

//             <span>
//               <i class="icon lightning" />
//               {bot.damage}
//             </span>
//             <span>
//               <i class="icon shield" />
//               {bot.armor}
//             </span>
//           </div>
//         </div>
      
//   );
// };



  
  



// export default BotCard;





// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import './style.css'; 

// const BotCard = props => {
//   const { bot } = props;

//   let botType;

//   switch (bot.bot_class) {
//     case "Assault":
//       botType = <i className="fas fa-crosshairs" />;
//       break;
//     case "Defender":
//       botType = <i className="fas fa-shield-alt" />;
//       break;
//     case "Support":
//       botType = <i className="fas fa-medkit" />;
//       break;
//     default:
//       botType = <div />;
//   }

//   return (
    
//         <div className="col-sm-4 mb-4">
//           <div className="card" key={bot.id} onClick={() => props.addBot(bot)}>
//             <div className="card-img-top">
//               <img alt="oh no!" src={bot.avatar_url} />
//             </div>
//             <div className="card-body">
//               <div className="card-title">
//                 {bot.name} {botType}
//               </div>
//               <div className="card-text text-wrap">
//                 <small>{bot.catchphrase}</small>
//               </div>
//             </div>
//             <div className="card-footer">
//               <span>
//                 <i className="fas fa-heartbeat" />
//                 {bot.health}
//               </span>
//               <span>
//                 <i className="fas fa-bolt" />
//                 {bot.damage}
//               </span>
//               <span>
//                 <i className="fas fa-shield-alt" />
//                 {bot.armor}
//               </span>
//             </div>
//           </div>
//         </div>
      
//   );
// };

// export default BotCard;



import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class BotCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseOver = () => {
    this.setState({ isHovered: true });
  };

  handleMouseOut = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { bot } = this.props;

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
      <div
        className={`col-sm-3 mb-4 card border-dark mb-3 card-header  card mx-6 ${this.state.isHovered ? 'card-hover' : ''}`}
        key={bot.id}
        onClick={() => this.props.addBot(bot)}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <div className="image ">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content fw-bold ">
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
    );
  }
}

export default BotCard;

