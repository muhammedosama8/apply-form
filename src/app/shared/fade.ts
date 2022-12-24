import { animate, style, transition, trigger } from "@angular/animations";

export const fadeForm = trigger('fadeForm', [ 
    transition('void => *', [
      style({ opacity: 0, transform: 'translateX(-50px)' }), 
      animate(1000, style({opacity: 1, transform: 'translateX(0px)'}))
    ]) 
])

export const fadeImg = trigger('fadeImg', [ 
    transition('void => *', [
      style({ opacity: 0}), 
      animate(1000, style({opacity: 1}))
    ]) 
])