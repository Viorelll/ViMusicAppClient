import { Component, OnInit, Output, Input } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SongService } from '../song.service';

import * as $ from 'jquery';


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
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.song = this.songService.getSong(this.id); 

      console.debug($.jPlayer);
    });

    
  }

}
