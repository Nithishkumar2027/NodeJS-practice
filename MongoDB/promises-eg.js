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

// Add function
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    })
}

// Without Promise chaining
add(1,2).then((sum) => {
    console.log('Without Promise chaining')
    console.log('Sum: ',sum)
    add(sum, 4).then((sum2) => {
        console.log('Sum 2: ',sum2)
    }).catch((err) => {
        console.log(err)
    })
}).catch((err) => {
    console.log(err)
})

