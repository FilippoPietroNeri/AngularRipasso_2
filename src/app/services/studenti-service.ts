import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {
  studenti = [
    { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
    { id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
    { id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
    { id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
    { id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 },
  ];

  getStudenti()
  {
    return this.studenti
  }

  removeStudente(index: number)
  {
    this.studenti.splice(index, 1)
  }

  addStudente(nome: string, classe: string, mediaVoti: number)
  {
    let lastMaxId = this.studenti.at(-1)?.id ?? 0
    let newLastMaxId = lastMaxId! + 1;

    this.studenti.push(
      {
        id: newLastMaxId,
        nome: nome,
        classe: classe,
        mediaVoti: mediaVoti
      }
    )

    alert(`Lo studente ${nome} è stato aggiunto con successo. ID: ${newLastMaxId}`);
  }
}
