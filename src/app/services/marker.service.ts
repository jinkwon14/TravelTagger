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
}
