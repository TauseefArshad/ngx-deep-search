import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-deep-search-app';
  filteredList: any[] = []
  accessKeys: any[] = ['balance', 'eyeColor', 'name', 'company', 'email','gender','email','favoriteFruit']

  searchedData(data: any) {
    this.filteredList = data
  }

  dataList = this.filteredList = [
    {
      "balance": "$3,693.82",
      "age": 20,
      "eyeColor": "green",
      "name": "Mindy Contreras",
      "gender": "female",
      "company": "TERRAGO",
      "email": "mindycontreras@terrago.com",
      "phone": "+1 (955) 483-2402",
      "address": "303 Girard Street, Statenville, Palau, 8298",
      "about": "Excepteur duis qui nulla dolor nisi nisi cillum qui veniam nulla amet labore. Est ea ipsum in quis esse ea minim ea ipsum adipisicing in exercitation. Duis excepteur id laborum exercitation irure ad cillum reprehenderit officia proident commodo qui.\r\n",
      "registered": "2021-10-13T08:36:42 -05:00",
      "greeting": "Hello, Mindy Contreras! You have 2 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "balance": "$3,843.07",
      "age": 26,
      "eyeColor": "blue",
      "name": "Lynn Hodges",
      "gender": "male",
      "company": "TURNLING",
      "email": "lynnhodges@turnling.com",
      "phone": "+1 (986) 469-3102",
      "address": "769 Franklin Avenue, Soham, North Dakota, 5238",
      "about": "Minim elit enim dolore eiusmod est sit. Id irure laborum amet officia non sit commodo laboris ea. Commodo nulla tempor veniam consequat eu Lorem. Sunt aute ad laborum ea. Quis commodo quis exercitation enim exercitation dolor ad quis adipisicing. Nostrud exercitation cillum labore fugiat ut est.\r\n",
      "registered": "2024-01-02T09:32:19 -05:00",
      "greeting": "Hello, Lynn Hodges! You have 10 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "balance": "$2,005.83",
      "age": 24,
      "eyeColor": "brown",
      "name": "Erna Howe",
      "gender": "female",
      "company": "VERTON",
      "email": "ernahowe@verton.com",
      "phone": "+1 (920) 513-2188",
      "address": "299 Hope Street, Temperanceville, Nebraska, 2665",
      "about": "Quis eiusmod magna dolore laboris reprehenderit esse officia elit voluptate veniam. Culpa Lorem ea eu deserunt non. Ipsum eiusmod nulla velit magna dolor ipsum pariatur voluptate est Lorem exercitation reprehenderit ad. Quis aute culpa consectetur sint cillum esse mollit ut est nulla veniam eiusmod. Exercitation velit Lorem aliqua sint. Veniam labore irure nostrud pariatur irure ut dolor minim veniam. Duis fugiat do officia officia.\r\n",
      "registered": "2016-03-28T07:58:35 -05:00",
      "greeting": "Hello, Erna Howe! You have 10 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "balance": "$1,707.35",
      "age": 33,
      "eyeColor": "brown",
      "name": "Christian Potts",
      "gender": "male",
      "company": "PLASMOS",
      "email": "christianpotts@plasmos.com",
      "phone": "+1 (931) 581-3401",
      "address": "697 Seacoast Terrace, Soudan, Arkansas, 9221",
      "about": "Sint duis ipsum irure pariatur. Cillum et ad anim aliquip consequat officia laborum sint mollit. Labore dolore ullamco elit laborum minim velit deserunt pariatur sint sint eu veniam irure. Veniam aliquip aute nulla ut est nisi veniam ex dolor id Lorem exercitation cillum consequat. Deserunt occaecat Lorem Lorem nostrud adipisicing exercitation sint eu cupidatat exercitation excepteur labore culpa. Enim laboris do magna dolor proident.\r\n",
      "registered": "2016-10-09T05:19:52 -05:00",
      "greeting": "Hello, Christian Potts! You have 8 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "balance": "$2,255.91",
      "age": 25,
      "eyeColor": "green",
      "name": "Hyde Greene",
      "gender": "male",
      "company": "PRIMORDIA",
      "email": "hydegreene@primordia.com",
      "phone": "+1 (879) 437-3039",
      "address": "421 Beaumont Street, Tryon, Washington, 831",
      "about": "Ea qui fugiat exercitation magna. Aute tempor in culpa esse esse dolor velit sit aliqua in. Deserunt esse labore officia enim. Esse laboris sunt laboris Lorem mollit reprehenderit minim mollit ea do dolor.\r\n",
      "registered": "2020-07-24T01:21:55 -05:00",
      "greeting": "Hello, Hyde Greene! You have 5 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "balance": "$3,625.41",
      "age": 26,
      "eyeColor": "brown",
      "name": "Cleveland Burnett",
      "gender": "male",
      "company": "FIREWAX",
      "email": "clevelandburnett@firewax.com",
      "phone": "+1 (809) 478-3905",
      "address": "625 Mill Lane, Nord, Texas, 4520",
      "about": "Consequat culpa nulla exercitation est aute labore quis veniam ullamco aute velit laborum tempor eiusmod. Consectetur esse reprehenderit dolor elit ullamco. Magna aute anim adipisicing culpa minim commodo sint incididunt labore nulla sint et deserunt. Est sint qui est anim ex velit.\r\n",
      "registered": "2016-03-05T11:21:27 -05:00",
      "greeting": "Hello, Cleveland Burnett! You have 8 unread messages.",
      "favoriteFruit": "banana"
    }
  ]






}
