const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise resolved maamu')
        reject('Enna Kumaru ipdi aai pochu')
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log('Success: ', result)
}).catch((error) => {
    console.log('Error: ', error)
})
