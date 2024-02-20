# Deep Search Input 

**Compatibility:**

| ngx-deep-search    | Angular
| ------------------ |-------------|
| 16.x.x             | 16          |
| 17.x.x             | 17          |


View example

![alt](https://github.com/TauseefArshad/ngx-deep-search/blob/master/assets/search.png?raw=true)

## Installation

### Install This Library

`$ npm install ngx-deep-search`

## Example

Refer to main app in this repository for working example.

Or this:

[Stackblitz Demo (Angular 16)](https://stackblitz.com/~/github.com/TauseefArshad/ngx-deep-search)


## Usage

### Import

Add `NgxDeepSearchModule` to your module file:

```javascript
import { NgxDeepSearchModule } from 'ngx-deep-search';
imports: [NgxDeepSearchModule];
```

## Example

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'test';
	//These are the keys upon which the data is to be filtered.
    accessKeys: string[] = ['balance', 'eyeColor', 'name', 'company', 'email','gender','email','favoriteFruit']
    // filtered data return from the ngx-deep-search
	resultedData(data: any[]) {
    console.log(data)
    }
 // sample data
  dataList=[{
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
    },]

}

```

```html
    <ngx-deep-search 
	[dataList]="dataList" 
	[placeholder]="'search'" 
	[searchFromKeys]="accessKeys" 
	(resultedData)="resultedData($event)"
	></ngx-deep-search>

```

## Options

| Options                  | Type                     | Default                           | Description                                                                                                   |
| ------------------------ | ------------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| placeholder              | `string`                       | `Search`                            | Custom string to be inserted as a placeholder.  
| dataList                 | `Array[]`                | `[]`                              | dataList from which user want to search    |
| searchFromKeys           | `sting[]`                | `[]`                              | These are the keys upon which the data is to be filtered.                                          |
| resultedData             | `Array[]`                | `Array[]`                            | Emits list when the user search  from the provided list.                                        |

