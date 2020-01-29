import { Injectable } from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Album } from 'src/app/shared/album.model';
import { AlbumService } from '../albums/album.service';

@Injectable({providedIn: 'root'})
export class SongService {
 
    constructor(private albumService: AlbumService) {}

    getSong(id: number) {

        let album = this.albumService.getAlbum(0);
        return album.songs[id];
      }

}