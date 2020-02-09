export class Song {
    public name: string;
    public description: string;
    public imagePath: string;
    public songPath: string;

    constructor(name: string, desc: string, imgPath: string, songPath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.songPath = songPath;
    }

}