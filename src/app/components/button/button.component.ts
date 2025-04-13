import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent {
    @Input() label:string = '';

    buttonText: string = 'ACESSAR';
    buttonTexts: string[] = ['ACESSAR', 'ENTRAR', 'LOGIN'];
    buttonNumber: number = 1;

    buttonObject = {
        label: 'ACESSAR',  
    };

    getAlert(num: number) {
        alert(num);
    };
}