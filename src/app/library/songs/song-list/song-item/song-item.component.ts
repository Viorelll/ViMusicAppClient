import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { SongService } from '../../song.service';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  @Input()   song: Song;
  @Input() index: number;
  myPlaylist: any;

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.myPlaylist = this.songService.getJPlayerList();
  }

  onPlay(index: number) {
    console.log("id " +  index);

    this.myPlaylist.play( index); // Plays the currently selected item
  }

}
