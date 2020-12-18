import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-section-about',
   templateUrl: './section-about.component.html',
   styleUrls: ['./section-about.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionAboutComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
}
