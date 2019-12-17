import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { InactiveUsers }   from './inactiveUsers';
import { ActiveUsers }   from './activeUsers';
import { UserService} from './user.service';
import { CountService} from './count.service';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ActiveUsers, InactiveUsers ],
	providers: [UserService, CountService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
