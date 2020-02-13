import { Component, OnInit, Output, Input, AfterViewInit } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SongService } from '../song.service';
import * as $ from 'jquery';

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
  myPlaylist: any;
  myPlayer: any;

  constructor(private songService: SongService, 
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.song = this.songService.getSong(this.id); 
    });

    this.myPlaylist = this.songService.getJPlayerList();
    this.myPlayer = this.songService.getJPlayer();
  }

  onPlay() {
    this.myPlaylist.play(this.id); // Plays the currently selected item
  }

  onPause() {
    this.myPlaylist.pause(this.id);
  }

  onStepBack() {
    console.log("Previous cliked");
    console.log(this.myPlaylist.previous);

    this.myPlaylist.previous();
  }

  onStepForward() {
    this.myPlaylist.next();
  }

  onShuffle() {
    console.log("Shuffle cliked");
    this.myPlaylist.shuffle(true); // Shuffle the playlist
  }

  onUnShuffle() {
    console.log("Shuffle cliked");
    this.myPlaylist.shuffle(false); // Un-shuffle the playlist
  }

  onRepeat() {
    console.log(this.myPlaylist);
    this.myPlaylist.loop = true;
  }

  onMute() {
    console.log(this.myPlayer);
    //this.myPlayer.jPlayer("mute");
     new jQuery.fn.init;
    console.log($("#jquery_jplayer_1"))
    
    $("#jquery_jplayer_1")[0].jPlayer("mute");
  
  }

  onUnmute() {
    this.myPlaylist.unmute(this.id);
  }

}
