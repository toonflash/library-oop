function Library(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlist = [];
}
  
function Playlist(name) {
    this.name = name;
    this.tracklist = [];
}

function Track(title, rating, duration) {
    this.title = title;
    this.rating = rating;
    this.duration = duration;
}

Playlist.prototype.totalDuration = function() {
    let result = 0;
    for (let i in this.tracklist) {
        result += this.tracklist[i].duration
    }
    return result
}

Playlist.prototype.overallRating = function() {
    let result = 0;
    for (let i in this.tracklist) {
        result = this.tracklist[i].rating
    }
    return result / this.tracklist.length
}

function addTrackToPlaylist(playlist, track) {
    playlist.tracklist.push(track);
}

function addPlaylistToLibrary(library, playlist) {
    library.playlist.push(playlist);
}

// create my new library
let myLibrary = new Library('Library 1', 'Jason')
// create a new playlist in my new library
let myPlaylist = new Playlist('House Jams');
// create some tracks 
let track1 = new Track('Track 1', 5, 300)
let track2 = new Track('Track 2', 3, 500)
let track3 = new Track('Track 3', 4, 200) 

// add tracks to my playlist
addTrackToPlaylist(myPlaylist, track1);
addTrackToPlaylist(myPlaylist, track2);
addTrackToPlaylist(myPlaylist, track3);

// add playlist to my library
addPlaylistToLibrary(myLibrary, myPlaylist)

// check out myLibrary
console.log("myLibrary: ", myLibrary);
// check out myPlaylist
console.log("myPlaylist: ", myPlaylist);

// check out myPlaylist's total duration
console.log("Total duration of myPlalist: ", myPlaylist.totalDuration());
// check out myPlaylist's overall rating
console.log("Overall rating of myPlaylist: ", myPlaylist.overallRating());
