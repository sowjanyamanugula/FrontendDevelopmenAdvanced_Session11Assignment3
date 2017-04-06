import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

    constructor(private el:ElementRef){
    
       // el.nativeElement.style.visibility= 'visible';
   //  el.nativeElement.show=true;
     console.log(el.nativeElement);
     // el.nativeElement.ElementRef.show=true;
    }
}
