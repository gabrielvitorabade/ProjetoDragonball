// let charactersList = document.querySelector('#characters')
fetch('http://localhost:3000/characters',{
    method:'Get',
    headers:{
        'content-type':'application/json',
    }
    
    
})
    .then(async(response)=>{
        const responseJS = await response.json()
        if(response.ok){
            responseJS.items.forEach((character)=> {
                document.querySelector('#characters').innerHTML += `
                <div class="card">
                    <div class="card-img">
                        <img src="${character.image}" alt="image of ${character.name}" >
                    </div>
                    <div class="card-info">
                    <h2>${character.name}</h2>
                        <div>
                            <P>Race : ${character.race}
                            <p>kI : ${character.ki}</p>
                        </div>
                    <div/>
                </div>
                `
            }      
        )}else{
            charactersList.innerHTML = `<p>${responseJS.message}</p>`
        } 
    }) 
      .catch((error) =>{
        console.error('Error:', error)
      })