import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/shared/album.model';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {

  @Input() album: Album;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
