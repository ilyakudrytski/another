const heading = document.getElementById('hello')
console.log(heading)
// const heading2 = document.getElementsByTagName('h2')[0] //старый метод
// const heading2 =document.getElementsByClassName('h2-class')[0] //старый метод
const heading2 = document.querySelector('#elk')
console.log(heading2)

// const heading3 =heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length-1]
console.log(heading3)
console.dir(heading.textContent)
setTimeout(() =>{
addStylesTo(heading, 'JS')    
},1500)

setTimeout(() =>{
    addStylesTo(heading2, 'практикуйся', 'yellow')    
    },3000)
    
setTimeout(() =>{
        addStylesTo(heading3.querySelector('a'), 'и все получится', 'blue')    
        },4500)

function addStylesTo (node, text, color ='red') {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
}

heading.onclick =() => {
    if(heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.backgroundColor = '#fff'
    } else{
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'    
    }

}
heading2.addEventListener('dblclick', () => {
    if(heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
        } else{
            heading2.style.color = 'yellow'
            heading2.style.backgroundColor = '#000'    
        }   
})