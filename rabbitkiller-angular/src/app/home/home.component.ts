import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  constructor(
    public el: ElementRef,
    public renderer2: Renderer2) {
    function random(m: number, n: number): number {
      return Math.floor(Math.random() * (n - m)) + m;
    }

    this.renderer2.addClass(this.el.nativeElement, `b_${random(0, 3)}`);
  }

}
