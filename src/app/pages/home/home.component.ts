import { Component, OnInit } from '@angular/core';
import { UsingService } from '@services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private using: UsingService
  ) { }

  ngOnInit(): void {
  }

  callServiceTest(): void {
    this.using.GetDataList().subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
