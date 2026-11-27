import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JokeService } from '../../shared/services/joke.service';

@Component({
  imports: [MatButtonModule, MatCardModule],
  selector: 'app-step12-http-client-service',
  styleUrl: './step12-http-client-service.css',
  templateUrl: './step12-http-client-service.html',
})
export class Step12HttpClientService {
  jokeService = inject(JokeService);
  dadJoke = signal('');
  chuckNorrisJoke = signal('');

  refreshDadJoke() {
    this.jokeService.getDadJoke().subscribe((data) => {
      this.dadJoke.set(data.joke);
    });
  }

  refreshChuckNorrisJoke() {
    this.jokeService.getChuckNorrisJoke().subscribe((data) => {
      this.chuckNorrisJoke.set(data.value);
    });
  }
}
