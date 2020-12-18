import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-section-third-message',
   templateUrl: './section-third-message.component.html',
   styleUrls: ['./section-third-message.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionThirdMessageComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
}
