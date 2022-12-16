let input = document.querySelector('input')
let btn = document.querySelector('button')
let list = document.querySelector('ul')
btn.addEventListener('click', () => {
   if (input.value.length > 0) {
      let list2 = document.createElement('li')
      let supp = document.createElement('button')
      list2.classList.add('li')
      supp.classList.add('supp')
      supp.innerText = 'Delete'
      list2.innerText = input.value
      list.appendChild(list2)
      list2.appendChild(supp)
      input.value = ''
      supp.addEventListener('click',()=>{
         list.innerText=''
         input.value=''
         })
   }
})
