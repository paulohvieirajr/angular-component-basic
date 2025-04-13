import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'entry-data',
    templateUrl: './entry-data.component.html',
    styleUrls: ['./entry-data.component.css'],
    imports: [FormsModule],
})

export class EntryDataComponent {
    textValue: string = 'Email';
    placeholder: string = 'Digite seu email';
    placePass: string = 'Senha';
    color: string = 'red';
}