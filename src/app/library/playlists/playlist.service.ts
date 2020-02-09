import { Injectable } from '@angular/core';
import { Playlist } from 'src/app/shared/playlist.model';
import { Song } from 'src/app/shared/song.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PlaylistService {

    private playlists: Playlist[] = [
        new Playlist("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "", "")]),
        new Playlist("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "", "")]),
        new Playlist("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "", "")]),
        new Playlist("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "", "")]),
        new Playlist("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "", "")])
    ];

    playlistChanged = new Subject<Playlist[]>();

    setRecipes(playlists: Playlist[]) {
        this.playlists = playlists;
        this.playlistChanged.next(this.playlists.slice());
      }

    getPlaylist(index: number): Playlist {
        return this.playlists[index];
      }
  
      getPlaylists() {
         return this.playlists.slice();
      }
}