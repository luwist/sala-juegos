import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        RouterLink,
        AvatarModule
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {

}
