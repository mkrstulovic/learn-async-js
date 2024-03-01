const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  async function animateAlice() {
    try {
      const aliceAnim1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
      console.log(aliceAnim1);
      const aliceAnim2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
      console.log(aliceAnim2);
      const aliceAnim3 = await alice3.animate(aliceTumbling, aliceTiming).finished;
      console.log(aliceAnim3);
      return 'done';
    } catch (error) {
      console.log(`Error Msg: ${error}`);
      return 'failed';
    }
  }

  animateAlice().then(status => console.log(status));

  /*
  alice1
    .animate(aliceTumbling, aliceTiming)
    .finished
    .then((res) => {
        console.log(res);
        alice2
            .animate(aliceTumbling, aliceTiming)
            .finished
            .then((res) => {
                console.log(res);
                alice3.animate(aliceTumbling, aliceTiming);
            })
    });

   */

  // Promise chain  
  // alice1.animate(aliceTumbling, aliceTiming).finished  
  //   .then(() => {
  //       return alice2
  //               .animate(aliceTumbling, aliceTiming)
  //               .finished;     
  //   })
  //   .then(() => {
  //     return alice3
  //             .animate(aliceTumbling, aliceTiming)
  //             .finished;
  //   })
  //   .catch((err) => alert(`Error when promising ... ${err.message}`));