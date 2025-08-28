


let data=new Date()
// document.write(data)
var months=["January","February" ,"March", "April","May","June","July","August","September","October","November" ,"December" ]
var allWeeks=[ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

document.getElementById('year').innerHTML=data.getFullYear()
document.getElementById('date').innerHTML=data.getDate()
document.getElementById('month').innerHTML=months[data.getMonth()]
document.getElementById('day').innerHTML=allWeeks[data.getDay()]
