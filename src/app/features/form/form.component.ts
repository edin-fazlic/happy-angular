import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MealService} from '../../services/meal.service';
import {MealDto} from '../../models/meal-dto.interface';
import {HappyPeopleService} from '../../services/happy-people.service';
import {PersonDto} from '../../models/dto/person-dto.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  @Output()
  formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  counter = 15;

  // unsubscribe: BehaviorSubject<any> = new BehaviorSubject<any>();

  constructor(private formBuilder: FormBuilder,
              private mealService: MealService,
              private happyPeopleService: HappyPeopleService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'name': [],
    });
  }

  ngOnDestroy(): void {
    // this.unsubscribe.next(true);
  }

  submitForm() {
    this.happyPeopleService.savePerson(this.form.value)
      // .pipe(
      //   takeUntil(this.unsubscribe)
      // )
      .subscribe((person: PersonDto) => {
        console.log(person);
      });
  }

  printMeal(mealList: MealDto) {
    console.log(this.counter);
    const first = mealList.meals[0];
    console.log('Food is: ' + first.strMeal);
    console.log('Source is: ' + first.strSource);
  }


}
