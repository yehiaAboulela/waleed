import { UnitsService } from './../../shared/services/units.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  units: any[] = [
    {
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      unevirsety: 'cairo',
      price: 999,
    },
    {
      src: 'https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      unevirsety: 'helwaan',
      price: 3000,
    },
    {
      src: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      unevirsety: 'ain shams',
      price: 2000,
    },
    {
      src: 'https://images.pexels.com/photos/1648838/pexels-photo-1648838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      unevirsety: 'cairo',
      price: 1250,
    },
    {
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      unevirsety: 'cairo',
      price: 999,
    },
    {
      src: 'https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      unevirsety: 'helwaan',
      price: 3000,
    },
    {
      src: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      unevirsety: 'ain shams',
      price: 2000,
    },
    {
      src: 'https://images.pexels.com/photos/1648838/pexels-photo-1648838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      unevirsety: 'cairo',
      price: 1250,
    },
  ];

  ngOnInit(): void {
    this.startSlideShow();
    this.unevirsety = this.ActivatedRoute.snapshot.params['name'];

    /* this.UnitsService.getAllUnits().subscribe({
      next: (res) => {
        console.log(res);
        this.units = res;
      },
      error: (err) => {
        console.log(err);
      },
    }); */
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
  }
}
