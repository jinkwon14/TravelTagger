export class Init{
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
      console.log('No markers found.... creating....');


      var markers = [

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

      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.log('Loading Markers...');
    }
  }
}
