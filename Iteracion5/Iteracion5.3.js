/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const streamersLeague = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

console.log(streamersLeague);

/* 
5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación. */

const streamerU = streamers.filter(streamer => streamer.name.includes('u'));

console.log(streamerU);

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */

const streamerLegends = streamers.filter(streamer => {
   const gameLegends = streamer.gameMorePlayed.includes('Legends');
    if (gameLegends && streamer.age > 35) {
       streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    } 
    return gameLegends;
})

console.log(streamerLegends);

/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

const input$$ = document.querySelector(`[data-function="toFilterStreamers"]`);
const button$$ =  document.createElement('button');
button$$.innerHTML = 'Buscar';
document.body.appendChild(button$$);


const inputSearch = () => {
    const streamerToSearch = streamers.filter((streamer) =>
      streamer.name.includes(input$$.value)
    );
    console.log(streamerToSearch);
}
button$$.addEventListener('click', inputSearch);
  

