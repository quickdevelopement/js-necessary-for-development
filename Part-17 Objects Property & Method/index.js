let car ={
    name: "Corola",
    model:1010,
    color: 'red',
    start:function(){
        return 'Car start'
    },
    drive: function(){
        console.log('running the car')
    }

};

console.log(car.start())
console.log(car.name);