  /*
  var meals = {};
  var meals = new Object();
  var meals = {breakfast: "oatmeal"};
  var meals = new Object({breakfast: '"'oatmeal.
                          lunch: '"'burrito',
                          dinner: 'steak'});
meals.snack = 'yogurt';
*/

function updatePlayList(obj, strArtist, strSongTitle) {
  return obj[strArtist]=strSongTitle;
}

function removeFromPlayList(obj, strArtist) {
  delete obj[strArtist];
  return obj;
}

var playlist = {};
playlist.Prince='1999';
playlist['Grateful Dead']='Casey Jones';
JSON.stringify(updatePlaylist(playlist, 'Bob Dylan','Like a Rolling Stone'));

//var returnString = 
//console.log(returnString);
