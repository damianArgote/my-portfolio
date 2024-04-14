import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    NgxTypedJsModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {

  @Input({required:true}) options: string[]= []
  @Input() subtitle:string = '';
  @Input() title:string= '';
  @Input() videourl:string = '';

}
