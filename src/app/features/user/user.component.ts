import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {PersonDto} from '../../models/dto/person-dto.interface';
import {HappyPeopleService} from '../../services/happy-people.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  @Input()
  set user(id: number) {
    this.userId = id;
  }

  happyPeople: PersonDto[] = [];

  userId!: number;


  constructor(private happyPeopleService: HappyPeopleService) {
  }

  ngOnInit(): void {
    this.happyPeopleService.fetchList()
      .subscribe((response: PersonDto[]) => {
        this.happyPeople = response;
      })
  }

}
