function get_recovered_energy(V,T){
    console.log(V)
    let speed = parseFloat(V)
    let time = parseFloat(T) 
    if(isNaN(speed)||isNaN(time)){
        return "0"};
    return (((0.004*(speed**2))-(0.1*speed)+4)*time*(0.7/3600))
}
const speed = document.getElementById("speed")
const time = document.getElementById("time")
const calculateBtn = document.getElementById("calculate")
const used_V =document.getElementById("used-speed")
const used_time =document.getElementById("used-breaking-time")
const resultContainer = document.getElementById("result")

calculateBtn.addEventListener("click",()=>{
    let result =get_recovered_energy(speed.value,time.value)
    resultContainer.innerHTML =`${result}kWh`
    used_V.innerHTML=speed.value
    used_time.innerHTML=time.value

})
