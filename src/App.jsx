import { useState } from "react";

// function App() {
//   //state (état,données)
//   const [firstName, setFirstName] = useState("");

//   //comportement
//   const handleChange = (event) => {
//     setFirstName(event.target.value);
//     console.log(firstName);
//   };

//   const handleSubmit = (event) => {
//     event?.preventDefault();

//     if (!firstName) {
//       alert("Veuillez entrer un prénom");
//     } else {
//       alert(`Bonjour ${firstName}`);
//     }
//     setFirstName("");
//   };

//   //affichage (render)
//   return (
//     <div>
//       <h1>Bienvenue chez nous !</h1>
//       <h2>Connectez-vous</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           value={firstName}
//           onChange={handleChange}
//           placeholder="Entrez votre prénom..."
//           type="text"
//         />
//         <button type="submit">Accédez à votre espace</button>
//       </form>
//     </div>
//   );
// }

function App() {
  const [firstName, setFirstName] = useState("");
  //données/déclaration

  const handleChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };

  const handleSubmit = (event) => {
    if (firstName) {
      alert(`Bonjour ${firstName}`);
    } else {
      alert("Veuillez entrer un prénom");
    }
    setFirstName("");
  };

  //affichage
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={firstName}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
}

export default App;
