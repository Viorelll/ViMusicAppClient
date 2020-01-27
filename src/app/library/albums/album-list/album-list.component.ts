import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/shared/album.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  userAlbums: Album[];
  albumServiceSubscription: Subscription;

  constructor(private albumService: AlbumService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumServiceSubscription = this.albumService.albumChanged.subscribe((userAlbums: Album[]) => {
      this.userAlbums = userAlbums;
    });

    this.userAlbums = this.albumService.getAlbums();
  }


}
