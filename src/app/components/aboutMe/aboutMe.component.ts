import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './aboutMe.component.html',
  styleUrl: './aboutMe.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {

  @Input() name!:string;
  @Input() photo:string = 'assets/images/profile.jfif';
  @Input() about!:string;

}
