
//your code here

let bandNames = ['The Beatles', 'Red Hot Chili Peppers', 'The Rolling Stones', 'Metallica', 'Aerosmith'];

// Function to remove articles from the band name
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names in lexicographic order while excluding articles
bandNames.sort(function(a, b) {
  return removeArticles(a).localeCompare(removeArticles(b));
});

// Get the <ul> element by its ID
let bandList = document.getElementById('band');

// Loop through the sorted band names and create <li> elements
for (let i = 0; i < bandNames.length; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = bandNames[i];
  bandList.appendChild(listItem);
}




// 	const bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Aerosmith', 'Rolling Stones', 'Queen', 'Anthrax', 'Black Sabbath'];

// function sortBands(bands) {
//   return name.replace(/^(a |an |the )/i, '');
// }
// let sortedBandNames = bandNames.sort((a, b) => {
//   return removeArticles(a).localeCompare(removeArticles(b));
// });
// const ulElement = document.getElementById('band');
// sortedBandNames.forEach(name => {
//   const liElement = document.createElement('li');
//   liElement.textContent = name;
//   ulElement.appendChild(liElement);
// });



		// function sortBands(bands) {
		// 	const articles = ['the', 'a', 'an'];
		// 	const sortedBands = bands.sort(function(a, b) {
		// 		const nameA = a.toLowerCase().replace(/^(the|an|a)\s+/, '');
		// 		const nameB = b.toLowerCase().replace(/^(the|an|a)\s+/, '');
		// 		if (nameA < nameB) {
		// 			return -1;
		// 		}
		// 		if (nameA > nameB) {
		// 			return 1;
		// 		}
		// 		return 0;
		// 	});
		// 	return sortedBands;
		// }

		// const sortedBands = sortBands(bandNames);

		// const bandList = document.getElementById("band");
		// sortedBands.forEach(function(band) {
		// 	const li = document.createElement("li");
		// 	li.appendChild(document.createTextNode(band));
		// 	bandList.appendChild(li);
		// });

