import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-child',
  imports: [],
  template: `
    <p>
      =============Counter in child: {{count()}}=========   </p>
  `,
  styles: ``
})
export class FooterChild {
  //  @Input() count: number = 0;   //а это старая версия и разница в ()
   count = input();   //это сигнал в новой версии

}
