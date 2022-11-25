import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const showInOutAnimation = trigger('showInOut', [
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

export const popupShowAnimation = trigger('popupShow', [
  transition('void => *', [
    style({
      transition: 'opacity 500ms',
      visibility: 'hidden',
      opacity: '0',
    }),
    animate('300ms'),
  ]),
  transition('* => void', [
    animate('200ms',
      style({
        transition: 'opacity 500ms',
        visibility: 'hidden',
        opacity: '0',
      })
    ),
  ]),
]);
