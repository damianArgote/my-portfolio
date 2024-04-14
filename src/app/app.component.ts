import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/aboutMe/aboutMe.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutMeComponent,
    ListCardsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title = '¡Bienvenido a mi sitio web!';
  public subtitle = 'Realizo proyectos con tecnologias de';
  public videourl = 'assets/videos/7989667-hd_1080_1920_25fps.mp4';
  public options = signal(
    ['Angular',
    'React',
    'Nodejs',
    'Tailwindcss',
    'Bootstrap',
    'Material UI',
    'Diseño web'
  ]);

  public name:string = 'Damián Argote';
  public photo:string = 'assets/images/profile.jfif';
  public about:string = 'Soy desarrollador frontend con mas de 3 años de experiencia. Me considero una persona responsable,disiciplinada, metodica y en constante desarrollo. Me encanta los nuevos desafios, el trabajo en equipo y lograr soluciones para cumplir con las metas que se me presenten. Cuento con amplio conocimiento en javascript y me desenvuelvo bien con las tecnologias de Angular, React y Nodejs tanto para el desarrollo frontend como backend. Tengo conocimientos en diseño y consultas de base de datos relacionales (SQL) y no relacionales (Mongodb). Diseño en interfaces de usuarios y experiencia de usuario (ux/ui). Me manejo con metodologias agiles para lograr rapidos resultados. Me apasiona el desarrollo web y crear aplicaciones para hacer el trabajo de las personas mas facil.'

}
