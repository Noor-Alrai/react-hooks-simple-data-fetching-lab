// create your App component here
import React, { useEffect, useState } from 'react';
import { data } from '../mocks/data';

function App(){
 const[dogImageUrl , setDogImageUrl] = useState(data.message);
 const[Loading , setLoading] = useState(true)
useEffect(()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then((data) => {
        setDogImageUrl(data.message)
        setLoading(false)})
    .catch((error) => console.error(error));

}, [])

return (<div className="App">
{ !Loading ? (
     <img src={dogImageUrl} alt="A Random Dog" />
 
) : (
    <p>Loading...</p>
)}
</div>)
}


export default App