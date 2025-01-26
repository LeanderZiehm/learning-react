
export default function App() {

  const animals = ["Lion","Cow","Snake","Lizard"];



  return (
    <div>
      <h1>Animals: </h1>
      <ul>
       {/* {animals.map(animal =>( <li key={animal} >{animal}</li> ) )} */}
       {/* {animals.map((animal) =>( <li key={animal} >{animal}</li> ) )} */}
       {animals.map((animal) =>{ return <li key={animal} >{animal}</li> } )}
       {/* {animals.map((anima) =>{ <li key={animal} >{animal}</li> } )} */}
      </ul>
    </div>
  );
}
