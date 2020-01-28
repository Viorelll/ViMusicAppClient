import { Component, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { Album } from 'src/app/shared/album.model';
import { AlbumService } from '../album.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit  {
  
  album: Album;
  id: number;
  
  constructor(private albumService: AlbumService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.album = this.albumService.getAlbum(this.id);
    });
  }
  
}
