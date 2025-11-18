import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-importance',
   standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.css']
})
export class ImportanceComponent {
  elements = [
    { nom: 'Tâche 1', importance: 1 },
    { nom: 'Tâche 2', importance: 2 },
    { nom: 'Tâche 3', importance: 3 },
    { nom: 'Tâche 4', importance: 1 },
    { nom: 'Tâche 5', importance: 3 }
  ];
}
