var elList = document.querySelector('.hero__list');

for (var pokemon of pokemons) {
	var listItem = document.createElement('li');
	var itemHeading = document.createElement('h2');
	var itemImage = document.createElement('img');
	var itemParagraph = document.createElement('p');
   var listType = document.createElement('ul');
   var listMultipliers = document.createElement('ul');
   var listWeaknesses = document.createElement('ul');

	listItem.setAttribute('class', 'list__item gap-3 p-2 w-25 border');

	itemImage.setAttribute('class', 'item__img mx-auto d-block');
	itemImage.setAttribute('src', pokemon.img);
	itemImage.setAttribute('alt', pokemon.name + ' image');
	itemImage.setAttribute('width', '100');
	itemImage.setAttribute('height', '100');

	itemHeading.setAttribute(
		'class',
		'item__heading h3 diplay-6 m-2 text-light text-center',
	);

	itemParagraph.setAttribute('class', 'item__info p-1 text-center mb-2 text-body');

   listType.setAttribute('class', 'type__list  nav flex-column m-0 mx-auto p-0 w-50');

   listMultipliers.setAttribute('class', 'multipliers__list  nav flex-column m-0 mx-auto p-0 w-50');

   listWeaknesses.setAttribute('class', 'multipliers__list  nav flex-column m-0 mx-auto p-0 w-50');

	itemHeading.textContent = pokemon.name;

   for (var type of pokemon.type) {

     
      var itemType = document.createElement('li');

      itemType.setAttribute('class', 'type__item mx-auto p-0 text-center');

      itemType.textContent = `Type: ` + type;
      
      listType.appendChild(itemType);
   }

   // for (var multipliers of pokemon.multipliers) {

   //    var itemMultipliers = document.createElement('li');
     
   //    itemMultipliers.setAttribute('class', 'multipliers__item mx-auto p-0 text-center');
      
   //    itemMultipliers.textContent = `Multipliers: ` + multipliers;

   //    listMultipliers.appendChild(itemMultipliers);
      
   // }  

   for (var weaknesses of pokemon.weaknesses) {

      var itemWeaknesses = document.createElement('li');

      itemWeaknesses.setAttribute('class', 'wealnesses__item mx-auto p-0 text-center');

      itemWeaknesses.textContent = `Weaknesses: ` + weaknesses

      listWeaknesses.appendChild(itemWeaknesses);

      
   }


	itemParagraph.innerHTML =
		`Num: ` +
		pokemon.num +
      `<br/>`+
		`Height: ` +
		pokemon.height +
		`<br/>` +
		`Weight: ` +
		pokemon.weight +
		`<br/>` +
		`Candy: ` +
		pokemon.candy +
		`<br/>` +
		`Candy count: ` +
		pokemon.candy_count +
      `<br/>` +
      `Eggs: ` + 
      pokemon.egg + 
      `<br/>`+
      `Spawn chance: ` +
      pokemon.spawn_chance + 
      `<br/>` + 
      `Avg spawns: ` + 
      pokemon.avg_spawns + 
      `<br/>` + 
      `Spawn time: ` +
      pokemon.spawn_time;


   itemParagraph.appendChild(listType);
   itemParagraph.appendChild(listWeaknesses);
   listItem.appendChild(itemImage);
	listItem.appendChild(itemHeading);
	listItem.appendChild(itemParagraph);


	elList.appendChild(listItem);
}
