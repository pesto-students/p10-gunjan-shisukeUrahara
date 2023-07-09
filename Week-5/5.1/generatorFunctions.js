async function doTask1() {
    return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Slept for: 2s`);
            console.log(`Slept for: 2s`)
		}, 2000)
	})
}
async function doTask2() {
    return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Slept for: 3s`)
            console.log(`Slept for: 3s`)

		},3000)
	})
}
async function doTask3() {
    return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Slept for: 4s`)
            console.log(`Slept for: 4s`)

		}, 4000)
	})
}
function* mainGenerator(){
    doTask1()
    yield
    doTask2()
    yield
    doTask3()
    yield
}
const obj = mainGenerator()
console.log(obj);
obj.next();
obj.next();
obj.next();
