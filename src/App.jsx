import { useState } from "react";
 

function App() {
const  [lista, setLista] = useState ([]);
const [articoloName, setArticoloName ] = useState ("");
const [articoloDescription, setArticoloDescription] = useState("");

const handArticleForm = (event) => {
  event.preventDefault ();

  const newArticle = {
    id: Date.now(),
    title : articoloName,
    description: articoloDescription
  }
  const newArray = [...lista, newArticle];
  
  
  setLista (newArray );
  setArticoloName("");
  setArticoloDescription("")

}

const cancella = (idDaCancella) => {
  const newArray = lista.filter(curArticolo => curArticolo.id !== idDaCancella);

setLista(newArray)
}


  return (
    <>
      <div className="container">
        <section>
 <h2>Articoli inseriti</h2>
 <div className="row row-cols-2 rowcols-lg-3">
 {lista.length > 0 ? (
             lista.map((curItem) =>(
        <div className="col" key={curItem.id}>
          <div className="card">
            <div className="card-body">
              <h4>{curItem.title}</h4>
              <p>{curItem.description}</p>
              <button onClick={()=> cancella(curItem.id)} className="btn btn-danger">cancella</button>
            </div>
          </div>
        </div>
      ))
          ) : (<p>Nessun articolo presente</p>
   
      
          )}
  </div>
  </section>
  <section>
    <h3>aggiungi articolo</h3>
    <form onSubmit={handArticleForm} >
      <div className="mb-3">
        <label htmlFor="articoloName">Nome articolo</label>
        <input type="text" 
        className="form-control" 
        id="articoloName" 
        value={articoloName} 
        onChange={(event)=> setArticoloName(event.target.value)}/> 
      </div>
      <div>
      <label htmlFor="articoloDescription">Descrizione</label>
        <input type="text" 
        className="form-control" 
        id="articoloDescription" 
        value={articoloDescription} 
        onChange={(event)=> setArticoloDescription(event.target.value)}/> 
      </div>
      <button type="submit" className="btn btn-primary">salva</button>
    </form>
  </section>
 </div>
    </>
  );
}

export default App
