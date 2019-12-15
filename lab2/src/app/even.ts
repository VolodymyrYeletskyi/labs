import { Component } from '@angular/core';
      
@Component({
    selector: 'even',
    template: `<h2>This is {{name}}!</h2>`,
    styles: [`h2, p {color:red;}`]
})
export class Even { 
    name = "Even";
}