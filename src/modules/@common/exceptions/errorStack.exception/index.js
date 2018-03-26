import { FlubErrorHandler } from './packages';

export class ErrorStack {
  constructor(opts = {}) {
    const {
      theme = 'dark',             // ['dark', 'light']
      quote = true,               // [true, false]
    } = opts;  
    
    return new FlubErrorHandler({ theme, quote });
  }
}