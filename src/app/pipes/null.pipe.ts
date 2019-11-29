import { Pipe } from '@angular/core';
@Pipe({
  name: 'exists'
})
export class NullPipe {
  transform(value) {
    return value === null || value === '' || value === undefined ? 'N/A' : value;
  }
}
