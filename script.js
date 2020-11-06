var fullname=document.querySelector('#usrnm')

var sub=document.querySelector('#sub')


sub.addEventListener('click',function(event){
    event.preventDefault()
    var count=0
    if(document.querySelector('.sp')){
       var sp = document.querySelectorAll('.sp');
       [].forEach.call(sp, function(l) {
        l.remove();
    });
    }
    var elems = document.querySelectorAll(".validation");
    [].forEach.call(elems, function(el) {
        el.classList.remove("validation");
    });
   const patonlyAlha=/^[A-Za-z]+$/
   const onlynum=/^[0-9]*$/
   const onemail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   var fullname=document.querySelector('#usrnm')
   var add1=document.querySelector('#add1')
   var add2=document.querySelector('#add2')
   var city=document.querySelector('#city')
   var spr=document.querySelector('#spr')
   var pcz=document.querySelector('#pcz')
   var country=document.querySelector('#country')
   var email=document.querySelector('#email')
   var phone=document.querySelector('#phone')
  if(fullname.value=='' || add1.value=='' || add2.value=='' || city.value =='' || spr.value=='' || pcz.value=='' || country.value=='' || email.value=='' || phone.value=='' ){
    count++
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    span.classList.add('sp')
    div.appendChild(span)
    span.innerText='Please Fill All Field Before Submitting The Form'
    if(fullname.value==''){
        fullname.classList.add('validation')
    }
    if(add1.value==''){
        add1.classList.add('validation')
    }
    if(add2.value==''){
        add2.classList.add('validation')
    }
    if(city.value==''){
        city.classList.add('validation')
    }
    if(spr.value==''){
        spr.classList.add('validation')
    }
    if(pcz.value==''){
        pcz.classList.add('validation')
    }
    if(country.value==''){
        country.classList.add('validation')
    }
    if(email.value==''){
        email.classList.add('validation')
    }
    if(phone.value==''){
        phone.classList.add('validation')
    }
    
  }
 /* if(add1.value==''){
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    div.appendChild(span)
    span.innerText='Address line 1 is empty'
    add1.classList.add('validation')
  }*/

  if(!patonlyAlha.test(fullname.value) && fullname.value!=='' ){
    count++
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    span.classList.add('sp')
    div.appendChild(span)
    span.innerText='No numbers in Name Field'
  }

  if(!patonlyAlha.test(city.value) && city.value!=='' ){
    count++
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    span.classList.add('sp')
    div.appendChild(span)
    span.innerText='No numbers in City Field'
  }
  if(!patonlyAlha.test(spr.value) && spr.value!=='' ){
    count++
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    span.classList.add('sp')
    div.appendChild(span)
    span.innerText='No numbers in State/Region Field'
  }
  if(!patonlyAlha.test(country.value) && country.value!=='' ){
    count++
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    span.classList.add('sp')
    div.appendChild(span)
    span.innerText='No numbers in Country Field'
  }
  if(!onlynum.test(pcz.value) && pcz.value!=='' ){
    count++
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    span.classList.add('sp')
    div.appendChild(span)
    span.innerText='No Alphabet in Postal Code/ZIP'
  }
  if(!onlynum.test(phone.value) && phone.value!==''){
    count++
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    span.classList.add('sp')
    div.appendChild(span)
    span.innerText='No Alphabet in Postal Code/ZIP'
  }
  if(phone.value.length != 10 && onlynum.test(phone.value) && phone.value!==''){
    count++
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    span.classList.add('sp')
    div.appendChild(span)
    span.innerText='Incorrect Number'
  }

  if(!onemail.test(email.value)){
    count++
    var div=document.querySelector('.rf')
    var span=document.createElement('span')
    span.classList.add('sp')
    div.appendChild(span)
    span.innerText='Incorrect Email'
  }

  if(count==0){
    alert("Thank you for Submitting the form")
    document.getElementById("myform").submit();
  }

})