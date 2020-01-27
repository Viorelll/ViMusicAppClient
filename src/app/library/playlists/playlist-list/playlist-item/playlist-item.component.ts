import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from 'src/app/shared/playlist.model';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent implements OnInit {

  @Input() playlist: Playlist;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
