import { Component } from '@angular/core';

@Component({
    selector: 'app-loading-spinner',
    template: `<div class="spinner">
                    <div class="cube1"></div>
                    <div class="cube2"></div>
                </div>`,
    styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {

}