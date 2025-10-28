import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudentiService } from '../services/studenti-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dettaglio-studente',
  imports: [RouterLink, CommonModule],
  templateUrl: './dettaglio-studente.html',
  styleUrl: './dettaglio-studente.css',
})
export class DettaglioStudente implements OnInit {
  studente: any;
  listaStudenti: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentiService: StudentiService
  ) {}

  ngOnInit() {
    this.listaStudenti = this.studentiService.getStudenti();

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.caricaStudente(id);
    });
  }

  caricaStudente(id: number) {
    this.studente = this.listaStudenti.find(s => s.id === id);

    if (!this.studente) {
      this.router.navigate(['/pagina3']);
    }
  }

  studenteSuccessivo() {
    const idCorrente = this.studente.id;
    const indiceCorrente = this.listaStudenti.findIndex(s => s.id === idCorrente);
    
    if (indiceCorrente !== -1 && indiceCorrente < this.listaStudenti.length - 1) {
      // Vai allo studente successivo
      const prossimoId = this.listaStudenti[indiceCorrente + 1].id;
      this.router.navigate(['/pagina3', prossimoId]);
    } else {
      // Torna al primo studente
      const primoId = this.listaStudenti[0].id;
      this.router.navigate(['/pagina3', primoId]);
    }
  }
}