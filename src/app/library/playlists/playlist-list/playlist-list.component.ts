import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from 'src/app/shared/playlist.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {

  playlists: Playlist[];
  playlistServiceSubscription: Subscription;

  constructor(private playlistService: PlaylistService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.playlistServiceSubscription = this.playlistService.playlistChanged.subscribe((playlists: Playlist[]) => {
      this.playlists = playlists;
    });

    this.playlists = this.playlistService.getPlaylists();
  }



  
}
