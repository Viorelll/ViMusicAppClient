import { Component, OnInit, Input, Output } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/shared/album.model';
import { AlbumService } from '../../albums/album.service';

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
  }

}
