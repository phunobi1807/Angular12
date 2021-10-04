import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Phu';
  public age = 25;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Quýt'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: -3, haGia: false },
    { ten: 'Cam', gia: 10, haGia: true },
    { ten: 'Quyét', gia: -5, haGia: false },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('trai cay = ', this.traiCay);
  }
  // public resetName():void {
  //   console.log("asf")
  //   this.name = 'Phu';
  // }
}
