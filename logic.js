// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
// let myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 13
// });

Var simplemaps_worldmap_mapdata = {
  main_settings: {
    // general settings
    width: "700", //or 'responsive'
    background_color: "#FFFFFF",
    background_image_url: 'no',
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect"
  }
}







  }








}








// Adding a tile layer (the background map image) to our map:
// We use the addto() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

/* body{
  padding: 0;
  margin: 0;
}*/

/* Set map, body, and html to 100% of the screen size. */
/* #map,
  body,
  html{
  height: 100 %;
  } */

// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method. 
let marker = L.marker([45.52, -122.67], {
  draggable: true,
  title: "States"
}).addTo(myMap);

// An array containing each state's name, location, date 05/10/2023, vaccines administered
let state = [{
  location: [32.3182, -86.9022],
  name: "Alabama",
  vaccines_administered: 7018011
},
{
  location: [66.1605, -153.3691],
  name: "Alaska",
  vaccines_administered: 1328221
}

{
  location: [34.0489, -111.0937],
  name: "Arizona",
  vaccines_administered: 14647405    
}
{
  location: [34.7999, -92.1999],
  name: "Arkansas",
  vaccines_administered: 4874091
}
{
  location: [36.7782, -119.4179],
  name: "California",
  vaccines_administered: 88487852 
}
{
  location: [39.1130, -105.3588],
  name: "Colorado",
  vaccines_administered: 13033446 
}
{
  location: [41.5999,	-72.6999],
  name: "Connecticut",
  vaccines_administered: 9040989   
}
{
  location: [39.0000, -75.5000],
  name: "Delaware",
  vaccines_administered: 2169125
}
{
  location: [27.9944, -81.7602],
  name: "Florida",
  vaccines_administered: 42267369   
}
{
  location: [33.2478, -83.4411],
  name: "Georgia",
  vaccines_administered: 17124791   
}
{
  location: [19.7417, -155.8444],
  name: "Hawaii",
  vaccines_administered: 3530357   
}
{
  location: [44.0682, -114.7420],
  name: "Idaho",
  vaccines_administered: 2894361   
}
{
  location: [40.0000, -89.0000],
  name: "Illinois",
  vaccines_administered: 26859342 
}
{
  location: [40.2735, -86.1269],
  name: "Indiana",
  vaccines_administered: 11201087  
}
{
  location: [42.0329, -95.5815],
  name: "Iowa",
  vaccines_administered: 6131087   
}
{
  location: [38.5000, -98.0000],
  name: "Kansas",
  vaccines_administered: 5387922   
}
{
  location: [37.8393, -84.2700],
  name: "Kentucky",
  vaccines_administered: 7510137  
}
{
  location: [30.3918, -92.3291],
  name: "Louisiana",
  vaccines_administered: 6961453   
}
{
  location: [42.4072, -71.3824],
  name: "Maine",
  vaccines_administered: 18179748   
}
{
  location: [39.0457, -76.6412],
  name: "Maryland",
  vaccines_administered: 14722268  
}
{
  location: [42.4072, -71.3824],
  name: "Massachusetts",
  vaccines_administered: 18179748    
}
{
  location: [44.1822, -84.5068],
  name: "Michigan",
  vaccines_administered: 18769116   
}
{
  location: [46.3924, -94.6362],
  name: "Minnesota",
  vaccines_administered: 12829141  
}
{
  location: [33.0000, -90.0000],
  name: "Mississippi",
  vaccines_administered: 4307637  
}
{
  location: [38.5739, -92.6037],
  name: "Missouri",
  vaccines_administered: 10509024  
}
{
  location: [46.9652, -109.5336],
  name: "Montana",
  vaccines_administered: 1870288   
}
{
  location: [41.5000, -100.0000],
  name: "Nebraska",
  vaccines_administered: 3822190   
}
{
  location: [39.8760, -117.2241],
  name: "Nevada",
  vaccines_administered: 5590682   
}
{
  location: [44.0000, -71.5000],
  name: "New Hampshire",
  vaccines_administered: 2983122   
}
{
  location: [39.8338, -74.8718],
  name: "New Jersey",
  vaccines_administered: 19826065   
}
{
  location: [34.3071, -106.0180],
  name: "New Mexico",
  vaccines_administered: 4750638   
}
{
  location: [43.0000, -75.0000],
  name: "New York",
  vaccines_administered: 45177512    
}
{
  location: [35.7821, -80.7934],
  name: "North Carolina",
  vaccines_administered: 19434544   
}
{
  location: [47.6505, -100.4370],
  name: "North Dakota",
  vaccines_administered: 1314469   
}
{
  location: [40.3674, -82.9962],
  name: "Ohio",
  vaccines_administered: 21104771    
}
{
  location: [36.0846, -96.9213],
  name: "Oklahoma",
  vaccines_administered: 6773461   
}
{
  location: [44.0000, -120.5000],
  name: "Oregon",
  vaccines_administered: 9399175   
}
{
  location: [41.2033, -77.1945],
  name: "Pennsylvania",
  vaccines_administered: 27586432   
}
{
  location: [41.7423, -71.7423],
  name: "Rhode Island",
  vaccines_administered: 2672092    
}
{
  location: [33.8360, -81.1637],
  name: "South Carolina",
  vaccines_administered: 8666603 
}
{
  location: [44.5000, -100.0000],
  name: "South Dakota",
  vaccines_administered: 1688981  
}
{
  location: [35.8601, -86.6601],
  name: "Tennessee",
  vaccines_administered: 11323319    
}
{
  location: [31.0000, -100.0000],
  name: "Texas",
  vaccines_administered: 52510128    
}
{
  location: [39.4192, -111.9506],
  name: "Utah",
  vaccines_administered: 6158852  
}
{
  location: [44.0000, -72.6999],
  name: "Vermont",
  vaccines_administered: 1762563   
}
{
  location: [37.9268, -78.0249],
  name: "Virginia",
  vaccines_administered: 155357    
}
{
  location: [47.7510, -120.7401],
  name: "Washington",
  vaccines_administered: 17723480
}
{
  location: [39.0000, -80.5000],
  name: "West Virginia",
  vaccines_administered: 3098571  
}
{
  location: [44.5000, -89.5000],
  name: "Wisconsin",
  vaccines_administered: 12444016    
}
{
  location: [43.0759, -107.2902],
  name: "Wyoming",
  vaccines_administered: 854132    
};

// Looping through the states array, create one marker for each state, bind a popup containing  its name, location, and vaccines administered
for (let i = 0; < state.length; i++) {
  let state = states[i];
  L.marker(state.location)
    .bindPopup('<h1>${state.name}</h1> <hr> <h3>vaccines_administered ${state.vaccines_administered.tolocalString()}</h3>')
    .addTo(myMap);
}








