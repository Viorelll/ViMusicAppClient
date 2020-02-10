import { Injectable } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Album } from 'src/app/shared/album.model';
import { AlbumService } from '../albums/album.service';

declare var jPlayerPlaylist: any;

@Injectable({providedIn: 'root'})
export class SongService {

  myPlaylist: any;

  constructor(private albumService: AlbumService) {}

  getSong(id: number) {

      let album = this.albumService.getAlbum(0);
      return album.songs[id];
  }

  getJPlayerList() {

    if (this.myPlaylist) {
      console.log('Playlist was already inited!');
      return this.myPlaylist;
    }

    this.myPlaylist = this.initJPlayer();
    console.log('Init first playlist!');

    return this.myPlaylist;
  }
 

  initJPlayer(): any {
    var cssSelector = { jPlayer: "#jquery_jplayer_1", cssSelectorAncestor: "#jp_container_1" };
    var playlist = []; // Empty playlist
    var options = {
        playlistOptions: {
          autoPlay: true,
          enableRemoveControls: true
      }, 
      swfPath: "../../../../../node_modules/jplayer/dist/jplayer", supplied: "ogv, m4v, oga, mp3, m4a" 
    };
  
    var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
    
    return myPlaylist;
  }

}