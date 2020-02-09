import { Component, OnInit, Input, Output } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/shared/album.model';
import { AlbumService } from '../../albums/album.service';

declare var jPlayerPlaylist: any;

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  @Input() inputSongs: Song[];
  @Output() songIndex: number = 1;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    
    var myPlaylist = this.initJPlayer();

    var myPlaylistSongs : any[] = [];
    this.inputSongs.forEach(x => myPlaylistSongs.push({mp3: x.songPath}));

     console.log(myPlaylistSongs);
    
    myPlaylist.playlist = myPlaylistSongs;
  }

  initJPlayer() : any {

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
