import { Component, Input } from '@angular/core';
import { CarComponent } from './car/car.component';
import { Car } from '../Car';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent, NgForOf],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {
  cars: Car[] = [
    { id: 0, marque: 'Toyota', modele: 'Corolla' },
    { id: 1, marque: 'Honda', modele: 'Civic' },
    { id: 2, marque: 'Ford', modele: 'Focus' },
    { id: 3, marque: 'Chevrolet', modele: 'Malibu' },
    { id: 4, marque: 'Nissan', modele: 'Altima' },
    { id: 5, marque: 'BMW', modele: '3 Series' },
    { id: 6, marque: 'Mercedes-Benz', modele: 'C-Class' },
    { id: 7, marque: 'Volkswagen', modele: 'Golf' },
    { id: 8, marque: 'Hyundai', modele: 'Elantra' },
    { id: 9, marque: 'Kia', modele: 'Optima' },
    { id: 10, marque: 'Mazda', modele: 'Mazda3' },
    { id: 11, marque: 'Subaru', modele: 'Impreza' },
    { id: 12, marque: 'Audi', modele: 'A4' },
    { id: 13, marque: 'Lexus', modele: 'IS' },
    { id: 14, marque: 'Jaguar', modele: 'XE' },
    { id: 15, marque: 'Tesla', modele: 'Model 3' },
    { id: 16, marque: 'Volvo', modele: 'S60' },
    { id: 17, marque: 'Infiniti', modele: 'Q50' },
    { id: 18, marque: 'Acura', modele: 'TLX' },
    { id: 19, marque: 'Alfa Romeo', modele: 'Giulia' },
    { id: 20, marque: 'Toyota', modele: 'Corolla' },
    { id: 21, marque: 'Honda', modele: 'Civic' },
    { id: 22, marque: 'Ford', modele: 'Focus' },
    { id: 23, marque: 'Chevrolet', modele: 'Malibu' },
    { id: 24, marque: 'Nissan', modele: 'Altima' },
    { id: 25, marque: 'BMW', modele: '3 Series' },
    { id: 26, marque: 'Mercedes-Benz', modele: 'C-Class' },
    { id: 27, marque: 'Volkswagen', modele: 'Golf' },
    { id: 28, marque: 'Hyundai', modele: 'Elantra' },
    { id: 29, marque: 'Kia', modele: 'Optima' },
    { id: 30, marque: 'Mazda', modele: 'Mazda3' },
    { id: 31, marque: 'Subaru', modele: 'Impreza' },
    { id: 32, marque: 'Audi', modele: 'A4' },
    { id: 33, marque: 'Lexus', modele: 'IS' },
    { id: 34, marque: 'Jaguar', modele: 'XE' },
    { id: 35, marque: 'Tesla', modele: 'Model 3' },
    { id: 36, marque: 'Volvo', modele: 'S60' },
    { id: 37, marque: 'Infiniti', modele: 'Q50' },
    { id: 38, marque: 'Acura', modele: 'TLX' },
    { id: 39, marque: 'Alfa Romeo', modele: 'Giulia' },
    { id: 40, marque: 'Toyota', modele: 'Corolla' },
    { id: 41, marque: 'Honda', modele: 'Civic' },
    { id: 42, marque: 'Ford', modele: 'Focus' },
    { id: 43, marque: 'Chevrolet', modele: 'Malibu' },
    { id: 44, marque: 'Nissan', modele: 'Altima' },
    { id: 45, marque: 'BMW', modele: '3 Series' },
    { id: 46, marque: 'Mercedes-Benz', modele: 'C-Class' },
    { id: 47, marque: 'Volkswagen', modele: 'Golf' },
    { id: 48, marque: 'Hyundai', modele: 'Elantra' },
    { id: 49, marque: 'Kia', modele: 'Optima' },
    { id: 50, marque: 'Mazda', modele: 'Mazda3' },
    { id: 51, marque: 'Subaru', modele: 'Impreza' },
    { id: 52, marque: 'Audi', modele: 'A4' },
    { id: 53, marque: 'Lexus', modele: 'IS' },
    { id: 54, marque: 'Jaguar', modele: 'XE' },
    { id: 55, marque: 'Tesla', modele: 'Model 3' },
    { id: 56, marque: 'Volvo', modele: 'S60' },
    { id: 57, marque: 'Infiniti', modele: 'Q50' },
    { id: 58, marque: 'Acura', modele: 'TLX' },
    { id: 59, marque: 'Alfa Romeo', modele: 'Giulia' },
    { id: 60, marque: 'Toyota', modele: 'Corolla' },
    { id: 61, marque: 'Honda', modele: 'Civic' },
    { id: 62, marque: 'Ford', modele: 'Focus' },
    { id: 63, marque: 'Chevrolet', modele: 'Malibu' },
    { id: 64, marque: 'Nissan', modele: 'Altima' },
    { id: 65, marque: 'BMW', modele: '3 Series' },
    { id: 66, marque: 'Mercedes-Benz', modele: 'C-Class' },
    { id: 67, marque: 'Volkswagen', modele: 'Golf' },
    { id: 68, marque: 'Hyundai', modele: 'Elantra' },
    { id: 69, marque: 'Kia', modele: 'Optima' },
    { id: 70, marque: 'Mazda', modele: 'Mazda3' },
    { id: 71, marque: 'Subaru', modele: 'Impreza' },
    { id: 72, marque: 'Audi', modele: 'A4' },
    { id: 73, marque: 'Lexus', modele: 'IS' },
    { id: 74, marque: 'Jaguar', modele: 'XE' },
    { id: 75, marque: 'Tesla', modele: 'Model 3' },
    { id: 76, marque: 'Volvo', modele: 'S60' },
    { id: 77, marque: 'Infiniti', modele: 'Q50' },
    { id: 78, marque: 'Acura', modele: 'TLX' },
    { id: 79, marque: 'Alfa Romeo', modele: 'Giulia' },
    { id: 80, marque: 'Toyota', modele: 'Corolla' },
    { id: 81, marque: 'Honda', modele: 'Civic' },
    { id: 82, marque: 'Ford', modele: 'Focus' },
    { id: 83, marque: 'Chevrolet', modele: 'Malibu' },
    { id: 84, marque: 'Nissan', modele: 'Altima' },
    { id: 85, marque: 'BMW', modele: '3 Series' },
    { id: 86, marque: 'Mercedes-Benz', modele: 'C-Class' },
    { id: 87, marque: 'Volkswagen', modele: 'Golf' },
    { id: 88, marque: 'Hyundai', modele: 'Elantra' },
    { id: 89, marque: 'Kia', modele: 'Optima' },
    { id: 90, marque: 'Mazda', modele: 'Mazda3' },
    { id: 91, marque: 'Subaru', modele: 'Impreza' },
    { id: 92, marque: 'Audi', modele: 'A4' },
    { id: 93, marque: 'Lexus', modele: 'IS' },
    { id: 94, marque: 'Jaguar', modele: 'XE' },
    { id: 95, marque: 'Tesla', modele: 'Model 3' },
    { id: 96, marque: 'Volvo', modele: 'S60' },
    { id: 97, marque: 'Infiniti', modele: 'Q50' },
    { id: 98, marque: 'Acura', modele: 'TLX' },
    { id: 99, marque: 'Alfa Romeo', modele: 'Giulia' },
    { id: 100, marque: 'Toyota', modele: 'Corolla' },
    { id: 101, marque: 'Honda', modele: 'Civic' },
    { id: 102, marque: 'Ford', modele: 'Focus' },
    { id: 103, marque: 'Chevrolet', modele: 'Malibu' },
    { id: 104, marque: 'Nissan', modele: 'Altima' },
    { id: 105, marque: 'BMW', modele: '3 Series' },
    { id: 106, marque: 'Mercedes-Benz', modele: 'C-Class' },
    { id: 107, marque: 'Volkswagen', modele: 'Golf' },
    { id: 108, marque: 'Hyundai', modele: 'Elantra' },
    { id: 109, marque: 'Kia', modele: 'Optima' },
    { id: 110, marque: 'Mazda', modele: 'Mazda3' },
    { id: 111, marque: 'Subaru', modele: 'Impreza' },
    { id: 112, marque: 'Audi', modele: 'A4' },
    { id: 113, marque: 'Lexus', modele: 'IS' },
    { id: 114, marque: 'Jaguar', modele: 'XE' },
    { id: 115, marque: 'Tesla', modele: 'Model 3' },
    { id: 116, marque: 'Volvo', modele: 'S60' },
    { id: 117, marque: 'Infiniti', modele: 'Q50' },
    { id: 118, marque: 'Acura', modele: 'TLX' },
    { id: 119, marque: 'Alfa Romeo', modele: 'Giulia' },
    { id: 120, marque: 'Toyota', modele: 'Corolla' },
    { id: 121, marque: 'Honda', modele: 'Civic' },
    { id: 122, marque: 'Ford', modele: 'Focus' },
    { id: 123, marque: 'Chevrolet', modele: 'Malibu' },
    { id: 124, marque: 'Nissan', modele: 'Altima' },
    { id: 125, marque: 'BMW', modele: '3 Series' },
    { id: 126, marque: 'Mercedes-Benz', modele: 'C-Class' },
    { id: 127, marque: 'Volkswagen', modele: 'Golf' },
    { id: 128, marque: 'Hyundai', modele: 'Elantra' },
    { id: 129, marque: 'Kia', modele: 'Optima' },
    { id: 130, marque: 'Mazda', modele: 'Mazda3' },
    { id: 131, marque: 'Subaru', modele: 'Impreza' },
    { id: 132, marque: 'Audi', modele: 'A4' },
    { id: 133, marque: 'Lexus', modele: 'IS' },
    { id: 134, marque: 'Jaguar', modele: 'XE' },
    { id: 135, marque: 'Tesla', modele: 'Model 3' },
    { id: 136, marque: 'Volvo', modele: 'S60' },
    { id: 137, marque: 'Infiniti', modele: 'Q50' },
    { id: 138, marque: 'Acura', modele: 'TLX' },
    { id: 139, marque: 'Alfa Romeo', modele: 'Giulia' },
    { id: 140, marque: 'Toyota', modele: 'Corolla' },
    { id: 141, marque: 'Honda', modele: 'Civic' },
    { id: 142, marque: 'Ford', modele: 'Focus' },
    { id: 143, marque: 'Chevrolet', modele: 'Malibu' },
    { id: 144, marque: 'Nissan', modele: 'Altima' },
    { id: 145, marque: 'BMW', modele: '3 Series' },
    { id: 146, marque: 'Mercedes-Benz', modele: 'C-Class' },
    { id: 147, marque: 'Volkswagen', modele: 'Golf' },
    { id: 148, marque: 'Hyundai', modele: 'Elantra' },
    { id: 149, marque: 'Kia', modele: 'Optima' },
    { id: 150, marque: 'Mazda', modele: 'Mazda3' },
    { id: 151, marque: 'Subaru', modele: 'Impreza' },
    { id: 152, marque: 'Audi', modele: 'A4' },
    { id: 153, marque: 'Lexus', modele: 'IS' },
    { id: 154, marque: 'Jaguar', modele: 'XE' },
    { id: 155, marque: 'Tesla', modele: 'Model 3' },
    { id: 156, marque: 'Volvo', modele: 'S60' },
    { id: 157, marque: 'Infiniti', modele: 'Q50' },
    { id: 158, marque: 'Acura', modele: 'TLX' },
    { id: 159, marque: 'Alfa Romeo', modele: 'Giulia' },
    { id: 160, marque: 'Toyota', modele: 'Corolla' },
    { id: 161, marque: 'Honda', modele: 'Civic' },
    { id: 162, marque: 'Ford', modele: 'Focus' },
    { id: 163, marque: 'Chevrolet', modele: 'Malibu' },
    { id: 164, marque: 'Nissan', modele: 'Altima' },
    { id: 165, marque: 'BMW', modele: '3 Series' },
    { id: 166, marque: 'Mercedes-Benz', modele: 'C-Class' },
    { id: 167, marque: 'Volkswagen', modele: 'Golf' },
    { id: 168, marque: 'Hyundai', modele: 'Elantra' },
    { id: 169, marque: 'Kia', modele: 'Optima' },
    { id: 170, marque: 'Mazda', modele: 'Mazda3' },
    { id: 171, marque: 'Subaru', modele: 'Impreza' },
    { id: 172, marque: 'Audi', modele: 'A4' },
    { id: 173, marque: 'Lexus', modele: 'IS' },
    { id: 174, marque: 'Jaguar', modele: 'XE' },
    { id: 175, marque: 'Tesla', modele: 'Model 3' },
    { id: 176, marque: 'Volvo', modele: 'S60' },
    { id: 177, marque: 'Infiniti', modele: 'Q50' },
    { id: 178, marque: 'Acura', modele: 'TLX' },
    { id: 179, marque: 'Alfa Romeo', modele: 'Giulia' }
  ];

  selectedCar: Car = this.cars[0];

  nmbItems:number[] = [3,5,10,20,100];

  chosenPage!:number;

  nmbItemPage!:number;
  pagedCars!: Car[];
  filterCars!: Car[];

  constructor(){
    this.nmbItemPage= this.nmbItems[0];
    this.getPage(1);
    this.chosenPage = 0;
    this.filterCars = this.pagedCars;
  }

  getPage(currentPageIndex: number): void {
    if (currentPageIndex <= 0 || currentPageIndex > this.getNmbPage(this.cars,this.nmbItemPage)) {
      console.log("limit reached");
      return;
    }
    console.log(currentPageIndex);

    const startIndex:number = (currentPageIndex - 1) * this.nmbItemPage;
    const endIndex:number = startIndex + this.nmbItemPage;
    this.chosenPage = currentPageIndex;
    console.log("startIndex type:", typeof startIndex);
    console.log("this.nmbItemPage type:", typeof this.nmbItemPage);
  console.log("endindex : "+ endIndex);
    this.pagedCars = this.cars.slice(startIndex, endIndex);
  }


  showDetail(car: Car) {
    console.log(car);
    this.selectedCar = car;
  }

  getNmbPage(array:any[],nmbItem:number):number
  {
    return Math.ceil(array.length / nmbItem);
  }

  getSelectedOption(event: any): void {
    console.log("event : ", event.target.value);
    this.nmbItemPage = Number(event.target.value); // Convert to a number explicitly
    this.getPage(1);
  }

filterResults(term:any){
    console.log(term.target.value.toLowerCase());
    term.preventDefault();
    if(!term) this.getPage(this.chosenPage);
    this.filterCars = [...this.cars.filter(car => car.marque.toLowerCase().includes(term.target.value.toLowerCase()) ||
      car.modele.toLowerCase().includes(term.target.value.toLowerCase()))];
    this.pagedCars = this.filterCars;

}

}

