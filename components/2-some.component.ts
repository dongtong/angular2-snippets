import { Component } from '@angular/core';

// metadata
// decorator
@Component({
    moduleId: module.id,
    selector: '[some-app]',                 // used for html element attribute: <div some-app></div>
    templateUrl: 'some.component.html',
    styleUrls: ['a.css', 'b.css']
})

// name is xxAppComponent
export class SomeAppComponent {
    title: string = 'Some component';
}
