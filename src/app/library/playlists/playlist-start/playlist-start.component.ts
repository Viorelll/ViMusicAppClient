import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/shared/playlist.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist-start',
  templateUrl: './playlist-start.component.html',
  styleUrls: ['./playlist-start.component.css']
})
export class PlaylistStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

}
