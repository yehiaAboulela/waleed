import { UnitsService } from './../../shared/services/units.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { max } from 'rxjs';
import { Unit } from 'src/app/shared/interfaces/unit';

@Component({
  selector: 'app-exploore',
  templateUrl: './exploore.component.html',
  styleUrls: ['./exploore.component.css'],
})
export class ExplooreComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private UnitsService: UnitsService
  ) {}
  images: any[] = [
    {
      src: 'https://i.pinimg.com/originals/04/e4/de/04e4de7f9130055f0ff77df3efce5bde.jpg',
      text: 'Fully Furnished Apartments: Our units come fully furnished with modern furniture and appliances, making moving in a breeze.',
    },
    {
      src: 'https://sjc.phinma.edu.ph/wp-content/uploads/2023/04/IMG_0644-scaled.jpg',
      text: 'Study Spaces: Dedicated study rooms and quiet areas to help you focus on your studies.',
    },
    {
      src: 'https://housesforrentinfo.com/wp-content/uploads/2019/01/Cheap-Two-Bedroom-Apartments2-1024x597.jpg',
      text: 'Social Areas: Enjoy common areas like lounges, game rooms, and outdoor spaces to relax and socialize with fellow students.',
    },
  ];
  currentSlide: number = 0;
  slideInterval: any;
  unevirsety: string = '';
  isDropdownOpen: boolean = false;
  region: string = 'Select Region';
  minPrice: number = 0;
  maxPrice: number = 999999;
  units: Unit[] = [];
  ngOnInit(): void {
    this.startSlideShow();
    this.ActivatedRoute.params.subscribe({
      next: (data) => {
        this.unevirsety = data['name'];
        this.UnitsService.getAll().subscribe({
          next: (res: Unit[]) => {
            console.log(res);
            this.units = res.filter((cur) => cur.university !== 'null');
            if (this.ActivatedRoute.snapshot.params['name'] !== 'all') {
              this.units = res.filter(
                (cur) =>
                  cur.university.toLowerCase() == data['name'].toLowerCase()
              );
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }
  ngOnDestroy(): void {
    this.stopSlideShow();
  }

  /* -----------slide-------------- */
  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopSlideShow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }
  toggleDropdown(inOut: boolean) {
    this.isDropdownOpen = inOut;
  }

  /* -------------filters------------- */
  regionFilter(region: string) {
    this.region = `Region ${region}`;
  }
  applyFilters(): void {
    const region = this.region;
    const minPrice = this.minPrice;
    const maxPrice = this.maxPrice;
    if (this.region !== 'Select Region') {
      this.units = this.units.filter(
        (cur) => cur.region.toLocaleLowerCase == region.toLocaleLowerCase
      );
    }
    this.units = this.units.filter(
      (cur) => Number(cur.price) > minPrice && Number(cur.price) < maxPrice
    );
    console.log(this.units);
  }
  resetFilters() {
    this.UnitsService.getAll().subscribe({
      next: (res: Unit[]) => {
        console.log(res);
        this.units = res.filter((cur) => cur.university !== 'null');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
