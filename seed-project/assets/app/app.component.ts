import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [
        new Message("Some message", "Alice"),
        new Message("Another message", "Cindy"),
        new Message("The third one!", "John")
    ];
}