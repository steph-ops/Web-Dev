import { Component } from '@angular/core';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EtudiantFormComponent],
  template: `<app-etudiant-form></app-etudiant-form>`,
})
export class AppComponent { }
