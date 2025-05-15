import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, Observable, of} from 'rxjs';
import {MealDto} from '../models/meal-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class MealService {


  constructor(private httpClient: HttpClient) {
  }

  fetchMealsByName(name: string): Observable<MealDto> {

    return of({
      meals: [
        {
          strMeal: 'Hrana',
          strSource: 'www.realwebsite.com'
        }
      ],
    }).pipe(
      delay(2000)
    );


    // return this.httpClient.get<MealDto>('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name);
  }

}
