import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlbumService } from './albums/album.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }


}
