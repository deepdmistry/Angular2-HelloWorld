import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-heroes', templateUrl: './maps.component.html', styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  loc = new google.maps.LatLng(38.986709, -77.393325);
  
  ngOnInit() {
    let mapProp = {
      zoom: 13, center: this.loc, mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
    this.marker = new google.maps.Marker({position: this.loc, map: this.map});
  }
  
  latitude: number;
  longitude: number;
  
  setCenter(e: any) {
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }
}
