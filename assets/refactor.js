fetch("https://api.openweathermap.org/data/2.5/forecast?q=London&appid=af6cd0de4ed902410e31681b511a1063")
.then(res => res.json())
.then(data => {
    console.log(data)
    //array with 40 items
    const listOfDays = data.list
    const daysAtNoon = listOfDays.filter(day => day.dt_txt.includes("12:00:00"))
    console.log(daysAtNoon)

    tempArr =["one", "two", "three", "four", "five"]

    for(i=0; i<daysAtNoon.length; i++) {
        console.log(daysAtNoon[i])
        const referencePoint = "#day-" + tempArr[i]+ "-temp";
        //this is a template literal, a different way to use strings
        // const referencePoint = `#day-${tempArr[i]}-temp`

        $(referencePoint).text(daysAtNoon[i].main.temp)
    }
})