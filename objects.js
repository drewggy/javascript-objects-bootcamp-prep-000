  /*
  var meals = {};
  var meals = new Object();
  var meals = {breakfast: "oatmeal"};
  var meals = new Object({breakfast: '"'oatmeal.
                          lunch: '"'burrito',
                          dinner: 'steak'});
meals.snack = 'yogurt';
*/

function updatePlaylist(obj, strArtist, strSongTitle) {
  obj[strArtist]=strSongTitle;
  return obj;
}

function removeFromPlaylist(obj, strArtist) {
  delete obj[strArtist];
  return obj;
}

var playlist = {};
playlist.Prince='1999';
playlist['Grateful Dead']='Casey Jones';
console.log(JSON.stringify(playlist));
console.log(JSON.stringify(updatePlaylist(playlist, 'Bob Dylan','Like a Rolling Stone')));
console.log(JSON.stringify(playlist));

console.log(JSON.stringify(removeFromPlaylist(playlist, 'Bob Dylan')));
console.log(JSON.stringify(playlist));


//var returnString =
//console.log(returnString);
