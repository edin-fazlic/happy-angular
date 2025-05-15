import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, Observable, of} from 'rxjs';
import {MealDto} from '../models/meal-dto.interface';
import {PersonDto} from '../models/dto/person-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class HappyPeopleService {

  private readonly url = 'https://happy1-152029235b44.herokuapp.com/happy-people';

  constructor(private httpClient: HttpClient) {
  }

  fetchList(): Observable<PersonDto[]> {
    return this.httpClient.get<PersonDto[]>(`${this.url}/list`);
  }

  savePerson(person: PersonDto): Observable<PersonDto> {
    return this.httpClient.post<PersonDto>(this.url, person);
  }

}
