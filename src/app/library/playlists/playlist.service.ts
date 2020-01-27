import { Injectable } from '@angular/core';
import { Playlist } from 'src/app/shared/playlist.model';
import { Song } from 'src/app/shared/song.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PlaylistService {

    private playlists: Playlist[] = [
        new Playlist("Top40", "Top 40. Best music ever.", "", [new Song("In the end", "Linking Park", "")]),
        new Playlist("Top40", "Top 40. Best music ever.", "", [new Song("In the end", "Linking Park", "")]),
        new Playlist("Top40", "Top 40. Best music ever.", "", [new Song("In the end", "Linking Park", "")])
    ];

    playlisthanged = new Subject<Playlist[]>();

    setRecipes(playlists: Playlist[]) {
        this.playlists = playlists;
        this.playlisthanged.next(this.playlists.slice());
      }

    getPlaylist(index: number): Playlist {
        return this.playlists[index];
      }
  
      getPlaylists() {
         return this.playlists.slice();
      }
}