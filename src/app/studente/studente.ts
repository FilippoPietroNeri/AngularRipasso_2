import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-studente',
  imports: [CommonModule],
  templateUrl: './studente.html',
  styleUrl: './studente.css',
})
export class Studente {

  constructor(private studentiService: StudentiService) {}

  @Input() id!: number;
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() mediaVoti!: number;

  isShownMediaVoti = false;

  showMediaVoti()
  {
    this.isShownMediaVoti = !this.isShownMediaVoti;
  }

  rimuoviStudente(index: number)
  {
    this.studentiService.removeStudente(index);
  }
}
