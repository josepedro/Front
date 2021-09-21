//import React from 'react';

//function App(){

  //return <h1>Hello, World!</h1> 
//}

//export default App;

import { div } from 'prelude-ls';
import React from 'react';

function App(){

  return (
    <div>
      <h1>Olá, Mundo!</h1>
      <p>Aqui quem fala é ela: a equipe 001 diretamente do Constela Dev!</p>
    </div>
  ); // React não suporta mais de uma tag, por isso precisamos criar uma div dentro de return
}

export default App;