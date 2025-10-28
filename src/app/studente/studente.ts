import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StudentiService } from '../services/studenti-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studente',
  imports: [CommonModule, RouterLink],
  templateUrl: './studente.html',
  styleUrl: './studente.css',
})
export class Studente {

  constructor(private studentiService: StudentiService) {}

  @Input() id!: number;
  @Input() studenteId!: number;
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
