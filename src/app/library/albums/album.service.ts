import { Injectable } from '@angular/core';
import { Playlist } from 'src/app/shared/playlist.model';
import { Song } from 'src/app/shared/song.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Album } from 'src/app/shared/album.model';

@Injectable({providedIn: 'root'})
export class AlbumService {

    private albums: Album[] = [
        new Album("Top music", "Best music here.", "https://i.pinimg.com/originals/1c/c6/b2/1cc6b22d94423eaf2a7e68fdc146bbf6.jpg",
        [
          new Song("Yikes", "Nicki Minaj", "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/68/d0/a8/68d0a897-fda0-2963-320c-3eff4fa7bec9/20UMGIM09591.rgb.jpg/170x170bb.png"),
          new Song("Dance Monkey", "Tones and I", "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/40/e2/d1/40e2d103-dcd1-e406-cfe9-90eb3bb4a26b/075679839237.jpg/170x170bb.png"),
          new Song("Believe (feat. Justin Timberlake)", "Meek Mill", "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/a9/5e/c3/a95ec35a-0cb1-f4d3-0c02-538906fec8b0/075679823564.jpg/170x170bb.png"),
          new Song("Intentions (feat. Quavo)", "Justin Bieber", "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/49/c1/04/49c10497-421b-5480-0e88-2b1b9c7b038c/20UMGIM03126.rgb.jpg/170x170bb.png"),
          new Song("React", "The Pussycat Dolls", "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/5c/47/0a/5c470a0b-dd15-7603-18c7-117fb9fc70f6/5060550031539_1.jpg/170x170bb.png"),
          new Song("The Box", "Roddy Ricch", "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/ec/4b/79/ec4b7992-978e-7ece-208b-c098b7ef4023/075679829085.jpg/170x170bb.png"),
          new Song("Memories", "Maroon 5", "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/ca/6e/a3/ca6ea33c-5fcb-c607-6c7e-409dfebc2bbb/19UMGIM64502.rgb.jpg/170x170bb.png"),
          new Song("Blinding Lights", "The Weeknd", "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/79/e4/20/79e420e7-1263-8945-4863-3635da61e8c4/19UM1IM04638.rgb.jpg/170x170bb.png"),
          new Song("Circles", "Post Malone", "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/be/41/46/be4146f9-d1c1-9756-8b27-fde6e5b91ac4/19UMGIM78325.rgb.jpg/170x170bb.png"),
          new Song("Nobody But You (feat. Gwen Stefani)", "Blake Shelton", "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/c2/50/ce/c250ce37-4daf-3ce7-e6a4-050e0a16d09d/093624896586.jpg/170x170bb.png")
        ])
        //,
        // new Album("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg",
        // [
        //   new Song("In the end", "Linking Park", "https://www.intelli-tunes.com/ui/kvd/image/Pink360_SongArt.png"),
        //   new Song("In the end", "Linking Park", "https://www.intelli-tunes.com/ui/kvd/image/Pink360_SongArt.png")
        // ]),
        // new Album("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "")]),
        // new Album("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "")]),
        // new Album("Top40", "Top 40. Best music ever.", "http://spoman-os.org/pages/imgs/2019-12/39617406720_in-the-end-linkin-park-cover-feat-fleurie-jung-youth.jpg", [new Song("In the end", "Linking Park", "")])
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