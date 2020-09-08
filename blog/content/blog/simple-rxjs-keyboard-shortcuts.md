---
title: 'Create Keyboard Shortcuts with RxJS'
description: 'The cleanest way to create and orchestrate Keyboard Shortcuts with RxJS.'
published: true
publishedAt: 2020-06-08T19:20:51.808Z
updatedAt: 2020-06-08T19:20:51.808Z
tags:
  - RxJS
  - Quick Tip
keywords:
  - Shortcuts
  - Angular
authors:
  - 'Gary Großgarten'
github: https://github.com/garygrossgarten/rxjs-shortcuts
---

I recently tried to add some keyboard shortcuts to my Angular app. 🤯 **But don't worry**, the solution is quite simple. At least Brent Rambo approves.

<p align="center">
<img width="80%" max-width="640px" src="https://media.giphy.com/media/m2Q7FEc0bEr4I/source.gif" alt="Brent Rambo - Shortcut master">
</p>

In this [Quick Tip](https://blog.dev.mn/tags/quick-tip), I'll show you what I came up with, using [RxJS](https://rxjs-dev.firebaseapp.com/).
This demonstration is done in an Angular Workspace scaffolded with the [Angular CLI](https://cli.angular.io/).


## Implementation

The `shortcut` function below can be used to effortlessly create `Observables` for any keyboard shortcut. A keyboard shortcut is an array of keycodes (`event.code`), each representing a key of your keyboard. Grab the [KeyCode Enum here](https://github.com/garygrossgarten/rxjs-shortcuts/blob/master/projects/shortcuts/src/lib/keycodes.ts).

See the comments in the code for explanation:

```typescript
export const shortcut = (shortcut: KeyCode[]): Observable<KeyboardEvent[]> => {
  // Observables for all keydown and keyup events
  const keyDown$ = fromEvent<KeyboardEvent>(document, 'keydown');
  const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

  // All KeyboardEvents - emitted only when KeyboardEvent changes (key or type)
  const keyEvents$ = merge(keyDown$, keyUp$).pipe(
    distinctUntilChanged((a, b) => a.code === b.code && a.type === b.type),
    share()
  );

  // Create KeyboardEvent Observable for specified KeyCode
  const createKeyPressStream = (charCode: KeyCode) =>
    keyEvents$.pipe(filter((event) => event.code === charCode.valueOf()));

  // Create Event Stream for every KeyCode in shortcut
  const keyCodeEvents$ = shortcut.map((s) => createKeyPressStream(s));

  // Emit when specified keys are pressed (keydown).
  // Emit only when all specified keys are pressed at the same time.
  // More on combineLatest below
  return combineLatest(keyCodeEvents$).pipe(
    filter<KeyboardEvent[]>((arr) => arr.every((a) => a.type === 'keydown'))
  );
};
```

> **[combineLatest](https://rxjs-dev.firebaseapp.com/api/index/function/combineLatest)**: Whenever any input `Observable` emits, `combineLatest` will compute and emit all the latest values of all inputs. However, `combineLatest` will wait for all input `Observables` to emit at least once, before it starts emitting results.

## Usage

**Usage is simple**. Just call the `shortcut` function with your desired `KeyCode` combination. Then subscribe to the result and handle the keyboard shortcut. More examples can be found in the [repo](https://github.com/garygrossgarten/rxjs-shortcuts).

```typescript
const commaDot$ = shortcut([KeyCode.Comma, KeyCode.Period]);

const ctrlO$ = merge(
  shortcut([KeyCode.ControlLeft, KeyCode.KeyO]),
  shortcut([KeyCode.ControlRight, KeyCode.KeyO])
);

commaDot$.pipe(tap(() => doSomething())).subscribe();
```

## Bonus

The `shortcut` function emits whenever the specified keys are pressed simultaneously, no matter in which order they were pressed. If the sequence of the key presses is also important to you, you can use the pipeable operator below.

```typescript
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
```

Then use it like this

```typescript
const abc$ = shortcut([KeyCode.KeyA, KeyCode.KeyB, KeyCode.KeyC]).pipe(
  sequence()
);
```

Now the `abc$` `Observable` will only emit when the keys are pressed sequentially (a->b->c).

## Limitations

Beware that keyboard shortcuts could collide with global shortcuts specified by your OS or Browser (e.g. Spotlight on Mac for Cmd+Space). Also there are cases where `keyup` events will be skipped when certain keys are pressed down. This is particularly the case with the cmd key (`KeyCode.MetaRight` and `KeyCode.MetaLeft`) on mac.


---


If you have further questions on the article or just want to say hi, feel free to slide into my [twitter dms](https://twitter.com/garygrossgarten).🐦
