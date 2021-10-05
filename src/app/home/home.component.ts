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
  public districts: string[] = [];
  public vietnamData = [
    { city: 'Chọn Thành Phố', district: '' },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị Xã Tân Châu',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành Phố Vũng Tàu',
        'Thị Xã Bà Rịa',
        'Thị Xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('cities = ', this.vietnamData);
  }
  // public resetName():void {
  //   console.log("asf")
  //   this.name = 'Phu';
  // }
  public changeCity(event: any) {
    const city = event.target.value;
    console.log('event:', city);
    const search = this.vietnamData.filter((data) => data.city === city);
    console.log('search:', search);
    if (search && search.length > 0) {
      //  this.districts = search[0].district;
      this.districts = search[0].district && Array.isArray(search[0].district)
          ? search[0].district
          : [];
    }
  }
}
