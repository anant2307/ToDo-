var ul = document.getElementById('list');

var li;
 
 
 
 var addButton = document.getElementById('add');
 addButton.addEventListener('click',addItem);

 var removeButton = document.getElementById('remove');
 removeButton.addEventListener('click',removeItem);









function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul=document.getElementById('list');
    var textnode=document.createTextNode(item)

    if(item==''){
        alert("please write someting")
    }else{
        li=document.createElement('li');
        var 
        
        checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');

        var lable=document.createElement('lable');
        lable.setAttribute('for','item');

        ul.appendChild(lable);
        li.appendChild(checkbox);
        lable.appendChild(textnode);
        li.appendChild(lable);
        ul.insertBefore(li,ul.childNodes[0]);

        setTimeout(()=>{
            li.className='visual';
        }, 2);

        input.value='';
    }
}


function removeItem(){
    li =ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}