import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Album } from '../../../shared/album.model';


@Injectable({providedIn: 'root'})
export class AlbumResolverService implements Resolve<Album[]> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let albums:  Album[] = [new Album('Name', 'Desc', '#', null), 
            new Album('Name2', 'Desc2', '#', null),
            new Album('Name3', 'Desc3', '#', null),
        ]; 

        return albums;
    }

}