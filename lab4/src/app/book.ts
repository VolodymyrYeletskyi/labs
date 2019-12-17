import { Component, Input} from '@angular/core';


 //книга    
@Component({
    selector: 'book',
    template: `	<p>{{id}} {{name}} {{author}} {{year}}</p>
					`,
						
						
})
export class Book { 
    @Input()id:String;
	@Input()name:String;
	@Input()author:String;
	@Input()year:String;
		
}