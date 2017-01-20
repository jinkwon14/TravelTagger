import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = "My first angular2-google-map project!";
  // Zoom level
  zoom: number = 14;
  // Start Position
  lat: number = 29.718601;
  lng: number = -95.399044;
  // Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;

  // Markers
  markers: marker[] = [
    {
      name:'Torchys',
      lat: 29.717262,
      lng: -95.414723,
      draggable: true
    },
    {
      name:'Shiva',
      lat: 29.716936,
      lng: -95.417319,
      draggable: true
    },
    {
      name:'Benjy\'s',
      lat: 29.719461,
      lng: -95.416332,
      draggable: true
    }
  ];

  constructor(){

  }

  addMarker(){
    console.log('Adding Marker');
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
  }

  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
  }

  mapClicked($event:any){
    console.log('Map Clicked');
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }

    this.markers.push(newMarker);

  }

  markerDragEnd(marker:any, $event:any){
    console.log('dragEnd', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

  }
}

// Marker Type
interface marker{
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
