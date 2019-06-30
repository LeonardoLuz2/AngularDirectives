import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[nextFocusOnEnter]'
})
export class FocusDirective {
    constructor(private element: ElementRef) { }

    @HostListener('keydown', ['$event']) onKeyDown(e) {
        if (e.keyCode == 13) {
            let universe = document.querySelectorAll('input, button, select, textarea, checkbox, a[href]');
            let list = Array.prototype.filter.call(universe, function(item) {return item.tabIndex >= "0"});
            let index = list.indexOf(this.element.nativeElement);
            var element = list[index + 1] || list[0];
            element.focus();       
        }
    }
}
  