import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitsService } from '../shared/services/units.service';
import { Unit } from '../shared/interfaces/unit';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private UnitsService: UnitsService
  ) {}
  unit: Unit = {} as Unit;
  curImg = 0;
  purchase = false;
  roomMates: number = 0;
  finalPrice = 1;
  finalPriceTap = false;
  roomMatesNotValid = false;
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe({
      next: (data: any) => {
        this.UnitsService.getUnitDetails(data['id']).subscribe({
          next: (res) => {
            console.log(res);
            this.unit = res;
            this.finalPrice = res.price;
          },
        });
      },
    });
  }
  calcFinalPrice() {
    console.log(this.roomMates);
    if (this.roomMates == 1) {
      this.finalPrice = this.finalPrice * 0.7;
      this.finalPriceTap = true;
    } else if (this.roomMates == 2) {
      this.finalPrice = this.finalPrice * 0.5;
      this.finalPriceTap = true;
    } else if (this.roomMates == 3) {
      this.finalPrice = this.finalPrice * 0.3;
      this.finalPriceTap = true;
    } else if (this.roomMates == 0 || this.roomMates == null) {
      this.roomMates = 0;
      this.finalPriceTap = true;
    } else {
      this.roomMatesNotValid = true;
    }
  }
}
