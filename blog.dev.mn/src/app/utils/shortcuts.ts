import { KeyCode } from './keycodes';
import { fromEvent, merge, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, share, filter } from 'rxjs/operators';

export const shortcut = (shortcuts: KeyCode[]) => {
  const keyDown$ = fromEvent<KeyboardEvent>(document, 'keydown');
  const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

  const keyEvents = merge(keyDown$, keyUp$).pipe(
    distinctUntilChanged((a, b) => a.code === b.code && a.type === b.type),
    share()
  );

  const createKeyPressStream = (charCode: KeyCode) =>
    keyEvents.pipe(filter((event) => event.code === charCode.valueOf()));

  return combineLatest(shortcuts.map((s) => createKeyPressStream(s))).pipe(
    filter<KeyboardEvent[]>((arr) => arr.every((a) => a.type === 'keydown'))
  );
};

export function sequence() {
  return (source: Observable<KeyboardEvent[]>) => {
    return source.pipe(
      filter((arr) => {
        const sorted = [...arr]
          .sort((a, b) => (a.timeStamp < b.timeStamp ? -1 : 1))
          .map((a) => a.code)
          .join();
        const seq = arr.map((a) => a.code).join();
        return sorted === seq;
      })
    );
  };
}
