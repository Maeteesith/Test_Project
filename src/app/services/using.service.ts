import { Injectable } from '@angular/core'
import { Observable, forkJoin } from 'rxjs'
import { MainService } from './main.service'

@Injectable({
  providedIn: 'root'
})
export class UsingService {

  constructor(
    private mainService: MainService
  ) { }

  GetDataList(param: number = 1): Observable<any> {
    return this.mainService.get('https://jsonplaceholder.typicode.com',`/todos/${param}`,{})
  }
}
