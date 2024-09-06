declare module 'ember-scroll-modifiers/modifiers/scroll-into-view' {
  import { ModifierArgs } from 'ember-modifier';
  import Modifier from 'ember-modifier';

  export default class ScrollIntoViewModifier extends Modifier {
    modify(element: HTMLElement, positional: any[], named: ModifierArgs['named']): void;
  }
}

declare module 'ember-scroll-modifiers/modifiers/did-intersect' {
  import { ModifierArgs } from 'ember-modifier';
  import Modifier from 'ember-modifier';

  export default class DidIntersectModifier extends Modifier {
    modify(element: HTMLElement, positional: any[], named: {
      onEnter: () => void;
      onExit: () => void;
      maxEnter?: number;
      maxExit?: number;
      options?: IntersectionObserverInit;
      isObserving?: boolean;
    }): void;
  }
}

declare module 'ember-scroll-modifiers/services/observer-manager' {
  import Service from '@ember/service';

  export default class ObserverManagerService extends Service {
    observe(element: Element, options?: IntersectionObserverInit): void;
    unobserve(element: Element, options?: IntersectionObserverInit): void;
    addEnterCallback(element: Element, callback: IntersectionObserverCallback): void;
    addExitCallback(element: Element, callback: IntersectionObserverCallback): void;
    willDestroy(): void;
  }
}