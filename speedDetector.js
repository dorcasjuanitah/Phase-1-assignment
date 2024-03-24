const speedDriver = (speed) =>{
    if (speed <=80){
      console.log("OK");
    }
    let demeritPoint = 0;
    let count = 0;
    for (let i=80; i < speed; i++){
      if (count ===3){
        demeritPoint = demeritPoint + 1;
      }
      else if (count === 4){
        count = 0;
      }
      count = count +1;
    }
    if (demeritPoint >=12){
      console.log("License Suspende");
    }
    console.log(`Points: ${demeritPoint}`);
  };