function distributeGifts(totalGifts, friends) {
    let giftsD = 0; let origFriends=friends;
    for(let i=0;i<origFriends;++i){
      if(totalGifts===0){
        break;
      }
      friends-=1;
      totalGifts-=1;
      giftsD+=1
    }
    return giftsD;
  }

  console.log(distributeGifts(2, 4));

  let apple = [10,20,30,40,50]

  console.log(apple.length);

  console.log(Math.round(3.4));