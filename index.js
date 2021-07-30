coordinates = document.querySelector('.coordinates');
name1 = document.querySelector('.name1');
altitude = document.querySelector('.altitude');
longitude = document.querySelector('.longitude');
latitude = document.querySelector('.latitude');
station = document.querySelector('.station')
let alt = ""
let lat = 0;
let log = 0; 

function getLocation(){
    console.log('hello')
    const url = "https://api.wheretheiss.at/v1/satellites/25544"

    fetch(url).then(response=>{
        return response.json()}).then(response => {console.log("name:",response.name,
         "latitude:", response.latitude ,
          "longitude :", response.longitude, 
          "altitude: ", response.altitude)
    
        

     name1.textContent = `Name of Station = ${response.name}`;
     altitude.textContent = `Current Altitude = ${response.altitude}`
     longitude.textContent = `Current Longitude = ${response.longitude}`
     latitude.textContent = `Current Latitude = ${response.latitude}`
    //Altitude 
    
       //Latitude 
             if (response.longitude <= 20){
    
                station.style.left = `310px`
                 }
                 if (response.longitude > 20 && response.longitude < 40){
                  
                    station.style.left = `320px`
                     }
                     if (response.longitude > 40 && response.longitude < 60){
                      
                        station.style.left = `330px`
                         }
                         if (response.longitude > 60 && response.longitude < 80){
                      
                            station.style.left = `340px`
                             }
                             if (response.longitude > 80 && response.longitude < 100){
                      
                                station.style.left = `350px`
                                 } if (response.longitude > 100 && response.longitude < 120){
                      
                                    station.style.left = `360px`
                                     } if (response.longitude > 120 && response.longitude < 140){
                      
                                        station.style.left = `370px`
                                         }
                                         if (response.longitude > 140 && response.longitude < 160){
                      
                                            station.style.left = `380px`
                                             }
                                             if (response.longitude > 160 && response.longitude < 180){
                      
                                                station.style.left = `390px`
                                                 }
                                          
                                                //Altitude - 

    
                                   
                                                     
                                                     if (response.longitude > -20 && response.longitude < 0){
                                                      
                                                        station.style.left = `310px`
                                                         }
                                                         if (response.longitude > -40 && response.longitude < -20){
                                                          
                                                            station.style.left = `320px`
                                                             }
                                                             if (response.longitude > -60 && response.longitude < -40){
                                                          
                                                                station.style.left = `340px`
                                                                 }
                                                                 if (response.longitude > -80 && response.longitude < -60){
                                                          
                                                                    station.style.left = `350px`
                                                                     } if (response.longitude > -100 && response.longitude < -80){
                                                          
                                                                        station.style.left = `360px`
                                                                         } if (response.longitude > -120 && response.longitude < -100){
                                                          
                                                                            station.style.left = `370px`
                                                                             }
                                                                             if (response.longitude > -140 && response.longitude < -120){
                                                          
                                                                                station.style.left = `380px`
                                                                                 }
                                                                                 if (response.longitude > -160 && response.longitude < -140){
                                                          
                                                                                    station.style.left = `390px`
                                                                                     }
                                                                                     if (response.longitude > -180 && response.longitude < -160){
                                                          
                                                                                        station.style.left = `400px`
                                                                                         }


           //Latitude 
                 if (response.latitude > 0 && response.latitude < 20){
        
                    station.style.top = `300px`;
                     }
                     if (response.latitude > 20 && response.latitude < 40){
                      
                        station.style.top = `290px`
                         }
                         if (response.latitude > 40 && response.latitude < 60){
                          
                            station.style.top = `280px`
                             }
                             if (response.latitude > 60 && response.latitude < 80){
                          
                                station.style.top = `270px`
                                 }
                                 if (response.latitude > 80 && response.latitude < 100){
                          
                                    station.style.top = `260px`
                                     } if (response.latitude > 100 && response.latitude < 120){
                          
                                        station.style.top = `250px`
                                         } if (response.latitude > 120 && response.latitude < 140){
                          
                                            station.style.top = `240px`
                                             }
                                             if (response.latitude > 140 && response.latitude < 160){
                          
                                                station.style.top = `230px`
                                                 }
                                                 if (response.latitude > 150 && response.latitude < 160){
                          
                                                    station.style.top = `220px`
                                                     }
                                                  
                                                     if (response.latitude > -20 && response.latitude < 0){
        
                                                        station.style.top = `300px`;
                                                         }
                                                         if (response.latitude > -40 && response.latitude < -20){
                                                          
                                                            station.style.top = `320px`
                                                             }
                                                             if (response.latitude > -60 && response.latitude < -40){
                                                              
                                                                station.style.top = `340px`
                                                                 }
                                                                 if (response.latitude > -80 && response.latitude < -60){
                                                              
                                                                    station.style.top = `360px`
                                                                     }
                                                                     if (response.latitude > -100 && response.latitude < -80){
                                                              
                                                                        station.style.top = `380px`
                                                                         } if (response.latitude > -120 && response.latitude < -100){
                                                              
                                                                            station.style.top = `390px`
                                                                             } if (response.latitude > -140 && response.latitude < -120){
                                                              
                                                                                station.style.top = `400px`
                                                                                 }
                                                                                 if (response.latitude > -160 && response.latitude < -140){
                                                              
                                                                                    station.style.top = `410px`
                                                                                     }
                                                                                    
        
                                       
                                                         
                                                       




    })
   console.log(data)
    station.style.left = `1200px`;

    }

  
coordinates.addEventListener('click',getLocation)