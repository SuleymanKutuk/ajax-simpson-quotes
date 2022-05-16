
function fetchSimpsonsJSON() {
    
    const simpsonsId = 1;
    const url = `http://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; 
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons );
  
    
        const simpsonsHtml = `
        <p><strong>${simpsons[0].name}</strong></p>
        <img src="${simpsons[0].image}" />
		<p>${simpsons[0].quote}</p>
          <p>${simpsons[0].characterDirection}</p>
        `;

        
        const buttonhtml = '<button class="button is-primary" onclick="fetchSimpsonsJSON()">chargement</button>';

					document.querySelector('#simpsons').innerHTML = simpsonsHtml;
					document.querySelector('#simpsons').innerHTML += buttonhtml;
      });
  }
  
  fetchSimpsonsJSON();