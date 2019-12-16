import { Component,Input } from '@angular/core';
      
@Component({//компонент пользователь
    selector: 'user',
    template: `<p>{{name}}</p>`,
    
})
export class User { 
    @Input() name: String;
	@Input() state:String;
	
}