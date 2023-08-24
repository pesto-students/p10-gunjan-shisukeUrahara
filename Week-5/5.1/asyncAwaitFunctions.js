async function doTask1() {
    return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Slept for: 2s`);
		}, 2000)
	})
}
async function doTask2() {
    return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Slept for: 3s`)
		},3000)
	})
}
async function doTask3() {
    return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Slept for: 4s`)
		},4000)
	})
}
async function main() {
	// 1. 
	console.time('main')

	// 2.
	console.log(await doTask1())
	console.log(await doTask2(2))
	console.log(await doTask3(3))

}

main()