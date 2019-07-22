const salon = { //object
    name: 'Fashion Pets',
    phone: '886-567-4356',
    address: { //object inside object
        street: '5th Avenue',
        number: '25-A'

    },
    workingHours: {
        open: '8:00 AM',
        close: '5:00 PM'
    },
    pets: [],
    length: ''
}


console.log(salon.pets.length);
//object destructuring

let {
    name,
    phone,
    address: {
        street,
        number
    },
    workingHours: {
        open,
        close
    }
} = salon;

console.log(open);

function Pet(name, age, service, ownername, contactphone) {
    this.hunger = 10;
    this.happiness = 5;
    this.name = name;
    this.age = age;
    this.ownername = ownername;
    this.contactphone = contactphone;
    this.service = service
    this.feed = function () {
        this.hunger -= 10;
        this.happiness += 10;
    };
    this.status = function () {
        console.log(this.name + 'hunger: ' + this.hunger + ' happiness: ' + this.happiness);
    }
    this.ownerContact = function () {
        console.log('Name:' + this.ownername + '\n' + 'Phone:' + this.contactphone);

    }
}

const pet1 = new Pet('Zoey', 2, 'shower', 'Travis', '654-786-8345');
const pet2 = new Pet('Janis', 2, 'hair cut', 'Sabrina', '758-293-5748');
const pet3 = new Pet('Ozzy', 6, 'shower', 'Yair', '912-345-9185');


pet1.feed();
pet1.status();
pet1.feed();
pet1.status();
pet1.ownerContact();

//this will put the parameters in the pets method inside salon
salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
salon.length=salon.pets.length;


//this prints pet names from the pets method in the salon object.
for(i=0;i<salon.pets.length;i++){

    document.getElementById('info2').innerHTML += `<br>` + (i+1) + ' : ' + salon.pets[i].name;}

//this prints number of pets in the salon 
console.log(salon.length);
document.getElementById('info').innerHTML = `<h2> ${name} (${phone}), ${street} ${number} <br> It is open from ${open} to ${close}<br> We currently have ${salon.length} pets in the salon!</h2>`;