import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const showInOutAnimation = trigger('showInOut', [
  //from nothing to somewhere
  transition('void => *', [
    style({
      opacity: 0,
      bottom: '-100px',
      right: '0',
      transform: 'scale(0)',
      position: 'absolute',
    }),
    animate('1000ms'),
  ]),
  //into nothing
  transition('* => void', [
    animate('500ms',
      keyframes([
        style({
          left: '-100px',
          position: 'absolute',
          opacity: 0.7,
          offset: 0,
        }),
        style({
          left: '-500px',
          position: 'absolute',
          opacity: 0.3,
          offset: 0.3,
        }),
        style({
          left: '-900px',
          position: 'absolute',
          opacity: 0,
          offset: 1
        }),
      ])
    ),
  ]),
]);
