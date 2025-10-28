import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina2',
  imports: [FormsModule],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {

  constructor(private studentiService: StudentiService) {}

  newStudent = {nome: '', classe: '', mediaVoti: 0};

  addStudent()
  {
    if (this.newStudent.nome && this.newStudent.classe && (this.newStudent.mediaVoti > 0 && this.newStudent.mediaVoti <= 10))
    {
      this.studentiService.addStudente(
        this.newStudent.nome,
        this.newStudent.classe,
        this.newStudent.mediaVoti
      );
    } else {
      alert('Nome o Classe o MediaVoti non valido.')
    }
  }
}
