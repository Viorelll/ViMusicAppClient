import { Component, OnInit, Input, Output } from '@angular/core';
import { Song } from 'src/app/shared/song.model';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  @Input() songs: Song[];
  @Output() outputSongs: Song[];

  constructor() { }

  ngOnInit() {
  }

}
