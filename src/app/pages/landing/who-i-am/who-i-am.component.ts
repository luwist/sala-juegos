import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserGithub } from '@app/models';
import { GithubService } from '@app/services';
import { AvatarModule } from 'primeng/avatar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-who-i-am',
  standalone: true,
  imports: [CommonModule, RouterLink, AvatarModule],
  templateUrl: './who-i-am.component.html',
  styleUrl: './who-i-am.component.scss',
})
export class WhoIAmComponent {
  userGithub$!: Observable<UserGithub>;

  constructor(private _githubService: GithubService) {}

  ngOnInit(): void {
    this.userGithub$ = this._githubService.getUserByUsername('luwist');
  }
}
