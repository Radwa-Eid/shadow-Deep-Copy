function deepCopy(target, ...source) {
    source.forEach(element => {
        for (const key in element) {
            target[key] = element[key]
        }
    });
    return target
}

const deep = deepCopy({ name: 'Radwa', id: 10 }, {
    skills: [
        {
            id: 10,
            name: "html"
        }, {
            id: 11,
            name: "js"
        }
    ],
    jump: function () {
        console.log('Jump')
    },
    birthDate: new Date()
})
console.log(deep)


let arr = [];
for (let i=0; i < 3; i++) {
 arr.push(function () { return i });
}
let value = arr[0];
console.log(value);