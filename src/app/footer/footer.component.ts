import { Component } from '@angular/core';
import { FooterChild } from '../footer-child/footer-child';

@Component({
  selector: 'app-footer',
  imports: [FooterChild],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class Footer {

  count = 0;
  step = 1;

  increase(){
    this.count+=this.step;
  }
  
  decrease(){
    this.count-=this.step;
  }

  reset(){
    this.count = 0;
    this.step = 1;
  }

  get backgroundColor(){
if (this.count > 0) return '#00F900'
if (this.count < 0) return '#FF2600'

    return '#add8e6';
  }
  
  changeStep(value:string){
    this.step = parseFloat(value)|| 1;
  }
}
