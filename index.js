const inputBox = document.querySelector('#task');
const List = document.getElementById("list");
let addBtn = document.querySelector('#liveToast')
let addToast = document.querySelector('#toastWarning')
let toDoList = document.querySelector("#formInput") 
toDoList.addEventListener('submit', formSubmit)

function formSubmit(event) { //form gönderme olayının varsayılan davranışını engellendi. Bu sayede sayfanın yenilenmesi önlenir.
    event.preventDefault()
}

function setConfig() {
    List.innerHTML = localStorage.getItem("toDoList")
}
console.log(inputBox);  
function newElement() { 
    if (inputBox.value === "") { //inputBox öğesinin değerini kontrol eder.
        AddToast(); //Eğer değer boşsa, AddToast ile bir uyarı mesajı gösterir. 
    } else {
    let li = document.createElement('li') //bir "li" öğesi oluşturur,
        li.innerHTML = inputBox.value;    //içine inputBox değerini yerleştirir, 
        List.appendChild(li)             //bu öğeyi "List" öğesine ekler, 
        let btn = document.createElement("button")
        btn.innerHTML = "X"             //bir "x" düğmesi oluşturur,
        btn.classList.add('close')      //bu düğmeye "close" sınıfını ekler, 
        li.appendChild(btn)             //li öğesine ekler,
        AddBtn()                       //AddBtn kullanarak bir toast mesajı gösterir
    }
      
    inputBox.value = ""       //inputBox öğesinin değerini sıfırlar ve addLocalStorage işlevini çağırarak 
    addLocalStorage()         //verileri localStorage'a kaydeder.
}
function addLocalStorage() {
    localStorage.setItem("toDoList", List.innerHTML) //"toDoList" anahtarına sahip localStorage'a "List" öğesinin içeriğini kaydeder.
}

List.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        addLocalStorage()
    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        addLocalStorage()
    }
}, false);

let AddToast = () => {                     //AddToast işlevi "addToast" öğesini, AddBtn işlevi ise
    var show = new bootstrap.Toast(addToast)  //"addBtn" öğesini bir Toast örneğine dönüştürerek gösterir.
    show.show()                             
}
let AddBtn = () => {
    var Show = new bootstrap.Toast(addBtn)
    Show.show()
}

