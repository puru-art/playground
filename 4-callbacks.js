setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Puru', 'Mayank', 'Meet']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };
        callback(data)
    },2000)
}

geocode('Philadelphia', (data) => {
    console.log(data);
})

const add = (x, y, callback) => {
    setTimeout(() => {
        const sm = x+y;
        callback(sm)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})