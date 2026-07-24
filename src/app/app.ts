import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(25px)', opacity: 0 }),
        animate('700ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-15px)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  @ViewChild('expTrack') expTrack!: ElementRef<HTMLDivElement>;

  perfil = {
    nombre: 'Boris Enrique Bonett',
    titulo: 'Ingeniero de Sistemas',
    descripcion: 'Ingeniero de Sistemas especializado en desarrollo de software, con experiencia en el diseño, construcción e implementación de aplicaciones robustas y escalables.'
  };

  contacto = {
    telefono: '(+57) 3043598995',
    email: 'bonett.boris@gmail.com'
  };

  experiencia = [
    {
      cargo: 'Desarrollador Front-end',
      empresa: 'THE BIZ NATION',
      logo: 'assets/the_biz_nation_logo.jpeg',
      periodo: 'DIC 2022 - FEB 2026',
      descripcion: 'Desarrollo de soluciones empresariales con impacto social y analítico.',
      implementaciones: [
        'Creación y mantenimiento del módulo Biz Data',
        'Visualización de datos en plataformas educativas',
        'Integración de tests cerebrales',
        'Implementación de flujo de datos en tiempo real'
      ]
    },
    {
      cargo: 'Desarrollador Full-Stack',
      empresa: 'HYPERSOFT',
      logo: 'assets/hypersoft.jpeg',
      periodo: 'JUL 2021 - DIC 2022',
      descripcion: 'Soluciones orientadas al sector salud y administración documental.',
      implementaciones: [
        'Plataformas de gestión documental',
        'Sistemas médicos en línea',
        'Garantía de calidad de entregas y código limpio'
      ]
    },
    {
      cargo: 'Desarrollador Front-end',
      empresa: 'ELOPSITE',
      logo: 'assets/sena.png', // O la imagen que corresponda si tienes una para Elopsite
      periodo: 'JUN 2020 - DIC 2020',
      descripcion: 'Diseño e implementación de interfaces web adaptativas.',
      implementaciones: [
        'Desarrollo web responsivo (HTML, CSS, JS)',
        'Optimización de la experiencia del usuario (UX/UI)'
      ]
    }
  ];

  techStack = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'HTML5 / CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'AWS', icon: 'assets/aws.png' }
  ];

  // Primera mitad de las tecnologías (Fila superior - izquierda)
  get techGroup1() {
    const half = Math.ceil(this.techStack.length / 2);
    return this.techStack.slice(0, half);
  }

  // Segunda mitad de las tecnologías (Fila inferior - derecha)
  get techGroup2() {
    const half = Math.ceil(this.techStack.length / 2);
    return this.techStack.slice(half);
  }

  scrollExp(offset: number): void {
    if (this.expTrack) {
      this.expTrack.nativeElement.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }
}