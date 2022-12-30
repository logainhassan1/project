
// list

const navBar = document.querySelector('#navbar__list');
const navElement1 = document.createElement('li');
const navElement2 = document.createElement('li');
const navElement3 = document.createElement('li');
const navElement4 = document.createElement('li');
const ul=document.getElementById('navbar__list')

navElement1.setAttribute("id",("p1"),"class","")
navElement2.setAttribute("id",("p2"))
navElement3.setAttribute("id",("p3"))
navElement4.setAttribute("id",("p4"))



navBar.appendChild(navElement1);
navBar.appendChild(navElement2);
navBar.appendChild(navElement3);
navBar.appendChild(navElement4);

const text1 = document.createTextNode("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptate facilis quisquam dolor, nobis velit, non, voluptas deserunt at sapiente nesciunt rem accusantium molestias dignissimos recusandae quae enim autem nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident numquam delectus corporis beatae praesentium asperiores, vero voluptas ea nesciunt aperiam distinctio velit magnam cupiditate nostrum, debitis dolorum quos dicta.");
const text2 = document.createTextNode("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptate facilis quisquam dolor, nobis velit, non, voluptas deserunt at sapiente nesciunt rem accusantium molestias dignissimos recusandae quae enim autem nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident numquam delectus corporis beatae praesentium asperiores, vero voluptas ea nesciunt aperiam distinctio velit magnam cupiditate nostrum, debitis dolorum quos dicta.");
const text3 = document.createTextNode("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptate facilis quisquam dolor, nobis velit, non, voluptas deserunt at sapiente nesciunt rem accusantium molestias dignissimos recusandae quae enim autem nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident numquam delectus corporis beatae praesentium asperiores, vero voluptas ea nesciunt aperiam distinctio velit magnam cupiditate nostrum, debitis dolorum quos dicta.");
const text4 = document.createTextNode("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptate facilis quisquam dolor, nobis velit, non, voluptas deserunt at sapiente nesciunt rem accusantium molestias dignissimos recusandae quae enim autem nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident numquam delectus corporis beatae praesentium asperiores, vero voluptas ea nesciunt aperiam distinctio velit magnam cupiditate nostrum, debitis dolorum quos dicta.");

navElement1.appendChild(text1);
navElement2.appendChild(text2);
navElement3.appendChild(text3);
navElement4.appendChild(text4);









// active

if(bottom=1947, height=1213 ,left=0 ,right=887 ,top=734 ,width=887,x=0, y=734)
    {
        function myFunction() {
            var element1 = document.getElementById("p1");
            element.classList.add("active");
            }
        
    }
    else{
        function myFunction() {
        var element = document.getElementById("p1");
        element.classList.remove("active");
        }}
















// scrollIntoView


let elm1 = document.querySelector('#b1')
let view1 = document.querySelector('#p1')

elm1.addEventListener("click", (e) => {
    e.preventDefault()
    view1.scrollIntoView()
})


let elm2 = document.querySelector('#b2')
let view2 = document.querySelector('#p2')

elm2.addEventListener("click", (e) => {
e.preventDefault()
view2.scrollIntoView()
    })

    let elm3 = document.querySelector('#b3')
    let view3 = document.querySelector('#p3')
    
    elm3.addEventListener("click", (e) => {
        e.preventDefault()
        view3.scrollIntoView()
})


let elm4 = document.querySelector('#b4')
let view4 = document.querySelector('#p4')

elm4.addEventListener("click", (e) => {
e.preventDefault()
view4.scrollIntoView()
})























