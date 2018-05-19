import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-heroes', templateUrl: './maps.component.html', styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  
  ngOnInit() {
    let mapProp = {
      center: new google.maps.LatLng(38.986709, -77.393325), zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
  }
}
