var playlist = {adelle: "hello"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign ({}, playlist, {[artistName]: "songTitle"} )
}
