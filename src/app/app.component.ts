import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './features/navbar/navbar.component';
import {FooterComponent} from './features/footer/footer.component';
import {FormComponent} from './features/form/form.component';
import {MealService} from './services/meal.service';
import {MealDto} from './models/meal-dto.interface';
import {AboutComponent} from './features/about/about.component';
import {ContactUsComponent} from './features/contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    FormComponent,
    AboutComponent,
    ContactUsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hi all in 202';


  constructor(private mealService: MealService) {
  }

  searchFood(formValue: any) {
    console.log(formValue);
    // set spinner
    // set skeleton data
    this.mealService.fetchMealsByName(formValue.name).subscribe((apiResponse: MealDto) => {
      const first = apiResponse.meals[0];
      console.log('Food is: ' + first.strMeal);
      console.log('Source is: ' + first.strSource);
      // set real data
      // remove spinner
    });
    console.log(123);
  }

}
