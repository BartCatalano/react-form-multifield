import { useState } from "react";
 

function App() {
const  [lista, setLista] = useState ([]);
const [articoloName, setArticoloName ] = useState ("");
const [articoloDescription, setArticoloDescription] = useState("");
const [immagineInsert, setImmagineInsert] = useState(""); 
const [selectedOption, setSelectedOption] = useState ("");

const handArticleForm = (event) => {
  event.preventDefault ();

  const newArticle = {
    id: Date.now(),
    title : articoloName,
    description: articoloDescription,
    immagine: immagineInsert,
    Categoria: selectedOption,
  }
  const newArray = [...lista, newArticle];
  
  
  setLista (newArray );
  setArticoloName("");
  setArticoloDescription("");
  setImmagineInsert("");
  setSelectedOption("")

}

const cancella = (idDaCancellare) => {
  const newArray = lista.filter(curArticolo => curArticolo.id !== idDaCancellare);

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
              <div><p>Hai selezionato:{curItem.Categoria}</p></div>
              <div><img src={curItem.immagine} alt="" /></div>
              
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
      <div>
      <label htmlFor="immagineInsert">Immagine</label>
        <input type="text" 
        className="form-control" 
        id="immagineInsert" 
        value={immagineInsert} 
        onChange={(event)=> setImmagineInsert(event.target.value)}/> 
      </div>
      <div className="m-2" >
      <label htmlFor="selectOption">Seleziona un'opzione:</label>
      <select
        
        onChange={(event)=> setSelectedOption(event.target.value)}
        value={selectedOption}
      >
        <option value="">-- Seleziona --</option>
        <option value=" Categoria 1">Categoria  1</option>
        <option value=" Categoria 2">Categoria 2</option>
      </select>
      
    </div>
 

      <button type="submit" className="btn btn-primary">salva</button>
    </form>
  </section>
 </div>
    </>
  );
}

export default App
