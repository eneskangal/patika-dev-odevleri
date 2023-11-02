const arguments=process.argv.slice(2)
function areaofaCircle(radius){
    console.log((radius**2)*Math.PI)
}
areaofaCircle(arguments[0]*1)
