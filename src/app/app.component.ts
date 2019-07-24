import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dskfghahsdfgsdf';
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  year = ["2019", "2018", "2017", "2016", "2015", 
            "2014", "2013", "2012", "2011",
            "2010", "2009", "2008"];
  wish = 'Parmanand';
}
