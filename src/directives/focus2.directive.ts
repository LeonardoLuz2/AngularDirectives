import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[nextFocusLog]'
})
export class FocusConsoleDirective {
    constructor(private element: ElementRef) { }

    @HostListener('keydown', ['$event']) onKeyDown(e) {
        if (e.keyCode == 13) {
            console.log('oi');     
        }
    }
}