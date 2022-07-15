let money = 10000;
const buyACar = (car: any) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (money>10000){
                resolve("can buy " + car);
            }else {
                reject("Not enough to buy car");
            }
        },100);
    })
}

money = 10000001;
const promise= buyACar("Vinfast").then(value => {
    console.log(value)
}, error => {
    console.log(error)
})