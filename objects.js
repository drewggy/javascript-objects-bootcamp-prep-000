  /*
  var meals = {};
  var meals = new Object();
  var meals = {breakfast: "oatmeal"};
  var meals = new Object({breakfast: '"'oatmeal.
                          lunch: '"'burrito',
                          dinner: 'steak'});
meals.snack = 'yogurt';
*/

var function updatePlaylist(obj, strArtist, strSongTitle) {
  return obj.[strArtist]=strSongTitle;
}

var function removeFromPlaylist(obj, strArtist) {
  delete obj[strArtist];
}

var playlist = {};
playlist.Prince='1999';
playlist.['Grateful Dead']='Casey Jones';


