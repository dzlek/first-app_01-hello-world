import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import { Footer } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterModule, Footer],
  template: `
    <main>
      <app-footer></app-footer>
      <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
       </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})

export class App {
  title = 'homes';
}
