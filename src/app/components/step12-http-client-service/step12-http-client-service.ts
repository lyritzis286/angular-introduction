import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule, MatCardModule],
  selector: 'app-step12-http-client-service',
  styleUrl: './step12-http-client-service.css',
  templateUrl: './step12-http-client-service.html',
})
export class Step12HttpClientService {}
