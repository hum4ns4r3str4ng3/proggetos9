import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
}

export async function leggi() {
  return await(await fetch('assets/db.json')).json

}
