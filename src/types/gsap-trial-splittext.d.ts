declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: unknown, vars?: Record<string, unknown>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}
