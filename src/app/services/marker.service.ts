import {Injectable} from '@angular/core';
import {Init} from '../init-marker';

@Injectable()
export class MarkerService extends Init{
  constructor(){
    super();
    console.log('MarkerService initizlize...');
    this.load();
  }

  getMarker() {
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker){
    // Fetch the markers already there
    var markers = JSON.parse(localStorage.getItem('markers'));
    // Push to array
    markers.push(newMarker);
    // Set ls markers again
    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
