import { useState } from "react";
 const initialFormData = {
  name: "",
  description: "",
  immagine: "",
  option: "",
 }

function App() {
const  [lista, setLista] = useState ([]);
const [formData, setFormData] = useState(initialFormData);

const handArticleForm = (event) => {
  event.preventDefault ();
// creo oggetto del nuovo articolo
  const newArticle = {
    ...formData,
    id: Date.now(),
    
  }

  // creo copia dell'array con ila nuovo articolo 
  const newArray = [...lista, newArticle];
  

  // aggiorno lo stato della lista
  setLista (newArray );
  
// ripulisco i campi del form
setFormData(initialFormData);
}
// creo funzione per cancellare il post inserito
const cancella = (idDaCancellare) => {
  const newArray = lista.filter(curArticolo => curArticolo.id !== idDaCancellare);

setLista(newArray)
}

// creo la funzione generica peg li imput
const handleInputChange = (event) => {
  const chiaveCambiata = event.target.value;
  const newData = {
    ...formData,
    chiaveCambiata,
    
  };

  setFormData(newData);

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
        value={formData.name} 
        onChange={handleInputChange}/> 
      </div>
      <div>
      <label htmlFor="articoloDescription">Descrizione</label>
        <input type="text" 
        className="form-control" 
        nome="description"
        id="articoloDescription" 
        value={formData.description} 
        onChange={handleInputChange}/> 
      </div>
      <div>
      <label htmlFor="immagineInsert">Immagine</label>
        <input type="text" 
        className="form-control" 
        id="immagineInsert" 
        value={formData.immagine} 
        onChange={handleInputChange}/> 
      </div>
      <div className="m-2" >
      <label htmlFor="selectOption">Seleziona un'opzione:</label>
      <select
        
        onChange={handleInputChange}
        value={formData.option}
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
