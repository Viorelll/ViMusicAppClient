import { Component, OnInit, Output, Input } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SongService } from '../song.service';
declare var jQuery: any;

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: [
    './song-detail.component.css', 
    './jplayer.vimusicapp.css'
  ]
})
export class SongDetailComponent implements OnInit {
  song: Song;
  id: number;

  constructor(private songService: SongService, 
              private route: ActivatedRoute
              ) { }

  ngOnInit() {

    (function ($) {
      $(document).ready(function(){
        console.log("Hello from jQuery!");
        console.log(jQuery("p"));

        // jQuery.jPlayerPlaylist = new  jPlayerPlaylist({
        //   jPlayer: "#jquery_jplayer_1",
        //   cssSelectorAncestor: "#jp_container_1"
        // }, 
        // [
        //   {
        //     mp3:"../../../../data/audios/0bc6e5c4-1488-4454-b4f8-17b1cc1c951c.mp3"
        //   }
        //   ,
        //   {
        //     mp3:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        //   }
        //   ,
        //   {
        //     mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3"
        //   }
        // ], 
        // {
        //   swfPath: "../../../../../node_modules/jplayer/dist/jplayer",
        //   supplied: "oga, mp3",
        //   wmode: "window",
        //   useStateClassSkin: true,
        //   autoBlur: false,
        //   smoothPlayBar: true,
        //   keyEnabled: true
        // });


        $("#jpId").jPlayer( {
          ready: function () {
            $(this).jPlayer("setMedia", {
              mp3: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"// Defines the mp3 url
            });
          }
        });


      });
    })(jQuery);

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.song = this.songService.getSong(this.id);
    });
  }

}
