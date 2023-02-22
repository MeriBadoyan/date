const span1 = document.getElementById('firstSpan')
const span2 = document.getElementById('secondSpan')
const span3 = document.getElementById('thirdSpan')
const span4 = document.getElementById('forthSpan')

let date = new Date()

formatedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })

span1.innerHTML = formatedDate
span2.innerHTML = formatedDate
span3.innerHTML = formatedDate
span4.innerHTML = formatedDate