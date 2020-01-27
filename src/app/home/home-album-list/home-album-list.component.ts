import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/shared/album.model';
import { Subscription } from 'rxjs';
import { AlbumService } from 'src/app/library/albums/album.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-album-list',
  templateUrl: './home-album-list.component.html',
  styleUrls: ['./home-album-list.component.css']
})
export class HomeAlbumListComponent implements OnInit {

  homeAlbums: Album[];
  homeAlbumServiceSubscription: Subscription;

  constructor(private albumService: AlbumService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.homeAlbumServiceSubscription = this.albumService.albumChanged.subscribe((homeAlbums: Album[]) => {
      this.homeAlbums = homeAlbums;
    });

    this.homeAlbums = this.albumService.getHomeAlbums();
  }


}
