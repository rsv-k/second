import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-section-rules',
   templateUrl: './section-rules.component.html',
   styleUrls: ['./section-rules.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionRulesComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
}
