import { Song } from './song.model';

export class Playlist {
    public name: string;
    public description: string;
    public imagePath: string;
    public songs: Song[];

    constructor(name: string, desc: string, imgPath: string, songs: Song[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.songs = songs;
    }

}