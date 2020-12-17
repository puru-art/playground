// const square = (x) => x*x ;
// console.log(square(4))    

const event = {
    name : "Birthday Party",
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest List for '+this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending '+this.name);
        })
    }
};

event.printGuestList();