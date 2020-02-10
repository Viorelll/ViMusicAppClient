import { Component, OnInit, Input, Output } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/shared/album.model';
import { AlbumService } from '../../albums/album.service';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  @Input() inputSongs: Song[];
  @Output() songIndex: number = 1;

  constructor(private albumService: AlbumService, private songService: SongService) { }

  ngOnInit() {
    
    var myPlaylist = this.songService.getJPlayerList();
    
    var myPlaylistSongs : any[] = [];
    this.inputSongs.forEach(x => myPlaylistSongs.push({mp3: x.songPath}));
    myPlaylist.playlist = myPlaylistSongs;
  }

}
