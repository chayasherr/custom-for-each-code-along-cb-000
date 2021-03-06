const dogs = [
  { name: "Fido", age: 2 },
  { name: "Odie", age: 8 },
  { name: "Ralph", age: 4 }
];

for(let i = 0, l = dogs.length; i < l; i++) {
	console.log(dogs[i])
}

const dog = {name: "Fido", age: 5};

for(const key in dog) {
	console.log(key)
}

for(const key in dog) {
	console.log(dog[key])
}

function forEach(iterable, callback){
	if(Array.isArray(iterable)){
       for(let i = 0, l = iterable.length; i < l; i++){
       	  const element = iterable[i];
       	  callback(element, i, iterable)
       }
	}else if(typeof iterable === 'object') {
		for(const key in iterable) {
			const value = iterable[key]
			callback(value, key, iterable)
		}
	}
}