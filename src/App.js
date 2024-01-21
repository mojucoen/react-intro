import './App.css';

// function App() {
//   const getStuff = () => "Wild function'ed text"

//   return (
//     <div>
//       <div className="ex-space">
//         <h4 className='ex-title'>Spot-check 1</h4 >
//         <div className="exercise" id="spotcheck-1">
//           <h1> {getStuff()}</h1>
//         </div>
//       </div>
//     </div>
//   )
// }
// function App() {
//   const personContainer = (name, email) => {

//     let greatName = `The Great ${name}`
 
//     return (
//        <div className='person'>
//          <h4>{greatName}</h4>
//          <p>Contact at: <a href={email}>email</a></p>
//        </div>
//      )
//    }

//   return (
//     personContainer("Louisa", "l@elo.com")
//   );
// }

// function App() {
//   const getMorningGreeting = () => "morning greeting"
//   const getEveningGreeting = () => "evening greeting"
//   // const timeof=new Date().getHours()
//   // const data=timeof<12?getMorningGreeting() :getEveningGreeting()
//   let isMorninig = new Date().getHours() < 12

  
//   return (
//     <div>
//       <div className="ex-space">
//         <h4 className='ex-title'>Spot-check 2</h4 >
//         <div className="exercise" id="spotcheck-2">
//         {/* {data} */}
//         {isMorninig ? getMorningGreeting() : getEveningGreeting()}

//         </div>
//       </div>
//     </div>
//   )
// }
// function App() {
//   const getMorningGreeting = () => <div>Good Morning</div>
//   const getEveningGreeting = () => <div>Good Evening</div>

//   return [
//     getMorningGreeting(),
//     getEveningGreeting(),
//     <p>some text</p>
//   ]
// }




// //////////EX1////////////////
// function App() {
//   const showCompany = (name, revenue) => {
//     return (
//       <div id={name}>
//         {name} makes {revenue} every year
//       </div>
//     );
//   };

//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ];

//   return (
//     <div className="ex-space">
//       <h4 className="ex-title">Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map((company) => showCompany(company.name, company.revenue))}
//       </div>
//     </div>
//   );
// }




///////////EX2///////////////
function App() {
  const getClassName = (temperature) => {
    if (temperature < 15) {
      return 'freezing';
    } else if (temperature >= 15 && temperature <= 30) {
      return 'fair';
    } else {
      return 'hell-scape';
    }
  };

  // Test with different temperatures
  const temperature = 10;

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className={`exercise ${getClassName(temperature)}`} id="ex-2">
        {/* Dynamically set className based on the temperature */}
        <div id="weatherBox" className={getClassName(temperature)}></div>
      </div>
    </div>
  );
}



export default App;