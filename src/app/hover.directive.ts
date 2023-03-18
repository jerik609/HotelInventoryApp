import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() appHover: string = 'red';

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) {
    console.log("THE ELEMENT in HOVER", this.element.nativeElement);
  }
  
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.appHover;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = this.appHover;
  }

}
