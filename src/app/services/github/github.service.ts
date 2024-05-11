import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGithub } from '@app/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private _httpClient: HttpClient) {}

  getUserByUsername(username: string): Observable<UserGithub> {
    return this._httpClient.get<UserGithub>(
      `https://api.github.com/users/${username}`
    );
  }
}
