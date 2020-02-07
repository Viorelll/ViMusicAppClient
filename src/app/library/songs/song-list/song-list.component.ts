import { Component, OnInit, Input, Output } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/shared/album.model';
import { AlbumService } from '../../albums/album.service';

import * as jPlayer from '../../../../../node_modules/jplayer/dist/jplayer/jquery.jplayer.js';

declare var jQuery: any;

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
    this.setupJPlayer();

  }

  setupJPlayer() : void {

      // (function ($) {
      //   $(document).ready(function(){
      //     console.log("Hello from jQuery!");
      //     console.log(jQuery("p"));

      var cssSelector = { jPlayer: "#jquery_jplayer_1", cssSelectorAncestor: "#jp_container_1" };
      var playlist = [{ mp3:"../../../../data/audios/0bc6e5c4-1488-4454-b4f8-17b1cc1c951c.mp3"} , {mp3:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"} , 
        {mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3"}]; // Empty playlist
      var options = {playlistOptions: {
        autoPlay: true,
        enableRemoveControls: true
      }, swfPath: "../../../../../node_modules/jplayer/dist/jplayer", supplied: "ogv, m4v, oga, mp3" };
      var myPlaylist = new jPlayer.jPlayerPlaylist(cssSelector, playlist, options);

      jQuery.jPlayerPlaylist = myPlaylist;
      
      //   });
      // })(jQuery);
  }

}
