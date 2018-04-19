import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  data  = [
    { speakerName: 'Carlos Rojas', speakerImage: '../../assets/images/speakers/carlos.jpg', title: 'Web UI en Globant.', talkName: 'Arquitectura de Apps escalables en Angular', date: 'Tue- 05:30pm - 6:30pm', bio: 'Google Product Strategy Expert.  Web UI en Globant.  Interesado principalmente en Progressive Web Apps, Angular y Firebase. En mi tiempo libre escribo libros y hago videos en Youtube.', rows: 1, cols:1},
    { speakerName: 'Vanessa Aristizabal', speakerImage: '../../assets/images/speakers/vanessa.jpg', title: 'Web UI en Globant.', talkName: 'Angular Material', date: 'Tue- 06:30 pm - 7:30pm', bio: 'Soy ingeniera de Sistemas, trabajo como Web UI en Globant. Tengo 6 años de experiencia como Web Developer. Apasionada por la tecnología, los libros y el Anime.', rows: 1, cols:1},
    { speakerName: 'Juan Tobon', speakerImage: '../../assets/images/speakers/juantobon.jpg', title: 'Web UI en Globant.', talkName: 'De Reactive Forms y Otras Delicias', date: 'Wed- 05:30pm - 6:30pm', bio: 'Web UI Developer en Globant, con 6 años de experiencia en desarrollo Front-End. Apasionado por la creación de experiencias digitales atractivas, la música y las artes visuales.', rows: 1, cols:1},
    { speakerName: 'Carlos Angulo', speakerImage: '../../assets/images/speakers/carlosangulo.png', title: 'Desarrollador Front End Senior en Yuxi Global. ', talkName: 'Let\'s build your Angular Animations', date: 'Wed- 06:30 pm - 7:30pm', bio: 'Desarrollador Front End Senior en Yuxi Global. Coorganizador y MC de Angular Medellín. Diseñador industrial apasionado por el Diseño de Interfaces, Diseño 3D y las Animaciones 2D. Ha trabajado para importantes empresas c..', rows: 1, cols:1},
    { speakerName: 'Sebastian Gomez', speakerImage: '../../assets/images/speakers/sebastian.jpg', title: 'Senior Web UI en Globant.', talkName: 'IONIC + TDD + PWA', date: 'Sat- 09:00 am - 01:00 pm', bio: 'Soy ingeniero de sistemas e Informática y Magister en Ingeniería de Sistemas de la Universidad Nacional de Colombia. Soy Practice Lead Hybrid Apps en Globant y Organizo el GDG Medellín', rows: 2, cols:1},
    { speakerName: 'Juan Vasquez', speakerImage: '../../assets/images/speakers/juanfe.jpg', title: 'Web UI en Globant.s', talkName: 'Patrones arquitectónicos de CSS para Angular', date: 'Thur- 05:30 pm', bio: 'Soy Juanfe Vásquez, padre de familia (1 hijo y 4 perros) y fanático de libros de ciencia ficción.  En mi carrera profesional me he desempeñado como UX Designer, Profesor, Líder de Área y Front-End Developer.', rows: 1, cols:1},
    { speakerName: 'Laura Ciro', speakerImage: '../../assets/images/speakers/laura.jpg', title: 'Desarrolladora en Yuxi Global.‍', talkName: 'Change Detection en Angular', date: 'Thur- 06:30 pm - 7:30pm', bio: 'Co-organizadora en @Pioneras-Dev , Rails Girls Med, NgGirls Med.Desarrolladora en Yuxi Global.‍ Me encanta el código, la música y la poesía, voy des-aprendiendo lo establecido, dando cabida a nuevas ideas/perspectivas y ..', rows: 1, cols:1},
    { speakerName: 'Sergio Valencia', speakerImage: '../../assets/images/speakers/sergio.jpg', title: 'Web UI developer developer ', talkName: 'Arquitectura de Datos con Observables.', date: 'Frid- 05:30pm - 6:30pm', bio: 'Soy Web UI developer developer en Globant con experiencia desarrollando múltiples aplicaciones en angular y react. Fanático de los libros y las nuevas tecnologías.', rows: 1, cols:1},
    { speakerName: 'Alvaro Agamez', speakerImage: '../../assets/images/speakers/alvaro.jpg', title: 'Fullstack developer', talkName: 'Observable Data Services', date: 'Frid- 06:30 pm - 7:30pm', bio: 'Fullstack developer, JavaScript Lover, dogs lover, curious, restless, a night soul.', rows: 1, cols:1},

  ];

  getAll(){
    return this.data;
  }

}
