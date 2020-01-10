import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Library } from 'src/app/shared/library.model';


@Injectable({providedIn: 'root'})
export class LibraryResolverService implements Resolve<Library[]> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let albums:  Library[] = [new Library('Name', 'Desc', '#', null), 
            new Library('Name2', 'Desc2', '#', null),
            new Library('Name3', 'Desc3', '#', null),
        ]; 

        return albums;
    }

}