import { Injectable } from '@angular/core';
import { Resistration } from 'src/app/shared/models/resistration.model';

const LS_CHAVE: string = "resistrations";


@Injectable({
  providedIn: 'root'
})
export class ResistrationService {

  constructor() { }


  GetAll(): Resistration[] {
    const resistrations = localStorage[LS_CHAVE]
    return resistrations ? JSON.parse(resistrations) : []
  }

  insert(resistration: Resistration): void {
    const resistrations = this.GetAll();
    resistration.id = new Date().getTime();
    resistrations.push(resistration)
    localStorage[LS_CHAVE] = JSON.stringify(resistrations);
  }

  GetById(id: number): Resistration | undefined {
    const resistrations: Resistration[] = this.GetAll()
    return resistrations.find(resistration => resistration.id === id)
  }

  update(resistration: Resistration): void {
    const resistrations: Resistration[] = this.GetAll()

    resistrations.forEach(
      (obj, index, objs) => {
        if (resistration.id === obj.id) {
          objs[index] = resistration
        }
      }
    );

    localStorage[LS_CHAVE] = JSON.stringify(resistrations)

  }

  remove(id: number): void {
    let resistrations: Resistration[] = this.GetAll();
    resistrations = resistrations.filter(resistration => resistration.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(resistrations)
  }
}
