const WorkoutArray =
  
    {Legs: ["Squats", "Leg Extensions","Lunges","Leg Press","Leg Curl" ],
     Chest:["Bench Press", "Dumbbell Press", "Dips","Flys", "Push-downs", "Push-ups", "Tri-Extensions"],
    BB :["Lat Pulldowns", "Preacher Curl", "Seated Row","Dumbell Curl", "Deadlifts"],
    Abs:["Crunches", "Planks","Ab Rollouts", "Sit-Ups","V-Ups","Leg Raises" ]


}

const FormattedLegs= WorkoutArray.Legs.map((word, index) => {
    if (index === WorkoutArray.Legs.length - 1) {
      return word;
    } else {
      return `${word}, `;
    }
  }).join('');
  


  const FormattedChest= WorkoutArray.Chest.map((word, index) => {
    if (index === WorkoutArray.Chest.length - 1) {
      return word;
    } else {
      return `${word}, `;
    }
  }).join('');


const FormattedBB= WorkoutArray.BB.map((word, index) => {
    if (index === WorkoutArray.BB.length - 1) {
      return word;
    } else {
      return `${word}, `;
    }
  }).join('');




  const FormattedAbs= WorkoutArray.Abs.map((word, index) => {
    if (index === WorkoutArray.Abs.length - 1) {
      return word;
    } else {
      return `${word}, `;
    }
  }).join('');



export {WorkoutArray, FormattedLegs,FormattedChest,FormattedBB,FormattedAbs}