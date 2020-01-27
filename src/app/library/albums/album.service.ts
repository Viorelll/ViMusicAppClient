import { Injectable } from '@angular/core';
import { Playlist } from 'src/app/shared/playlist.model';
import { Song } from 'src/app/shared/song.model';
import { Subject } from 'rxjs';
import { Album } from 'src/app/shared/album.model';

@Injectable({providedIn: 'root'})
export class AlbumService {
 
    private albums: Album[] = [
        new Album("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "")]),
        new Album("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "")]),
        new Album("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "")]),
        new Album("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "")]),
        new Album("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "")])
    ];

    albumChanged = new Subject<Album[]>();

    setRecipes(albums: Album[]) {
        this.albums = albums;
        this.albumChanged.next(this.albums.slice());
      }

    getAlbum(index: number): Album {
        return this.albums[index];
      }
  
    getAlbums() {
        return this.albums.slice();
    }

    getHomeAlbums(): Album[] {
      return this.albums.slice();
    }

}