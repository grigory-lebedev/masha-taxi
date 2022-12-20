import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const showInOut = trigger('showInOut', [
  state(
    'finalState',
    style({
      opacity: 1,
      position: 'relative',
      right: '0',
      bottom: '0',
    })
  ),
  //from nothing to somewhere
  transition('void => *', [
    style({
      opacity: 0,
      bottom: '-100px',
      right: '0',
      position: 'relative',
    }),
    animate('600ms'),
  ]),
  //into nothing
  transition('* => void', [
    animate(
      '1000ms',
      keyframes([
        style({
          bottom: '*',
          left: '-100px',
          position: 'relative',
          opacity: 0.7,
          offset: 0,
        }),
        style({
          bottom: '*',
          left: '-500px',
          position: 'relative',
          opacity: 0.3,
          offset: 0.3,
        }),
        style({
          bottom: '*',
          left: '-900px',
          position: 'relative',
          opacity: 0,
          offset: 1,
        }),
      ])
    ),
  ]),
]);

export const showUpOnTheSpot = trigger('showUpOnTheSpot', [
  transition('void => *', [
    style({
      opacity: '0',
    }),
    animate('500ms'),
  ]),
  transition('* => void', [
    animate('300ms',
      style({
        opacity: '0',
      })
    ),
  ]),
]);
