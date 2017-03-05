import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './app/components/tab/tab.component.html',
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
}