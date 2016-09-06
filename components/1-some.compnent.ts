import { Component } from '@angular/core';

// metadata
// decorator
@Component({
    moduleId: module.id,
    selector: 'some-app',                 // <some-app></some-app>
    templateUrl: 'some.component.html',
    styleUrls: ['a.css', 'b.css']
})

// name is xxAppComponent
export class SomeAppComponent {
    title: string = 'Some component';
}

