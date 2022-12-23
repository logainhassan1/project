
const navBar = document.querySelector('#navbar__list');
const navElement1 = document.createElement('li');
const navElement2 = document.createElement('li');
const navElement3 = document.createElement('li');
const navElement4 = document.createElement('li');
const ul=document.getElementById('navbar__list')

navElement1.setAttribute("id",("p1"))
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


const click1 = document.getElementById("1");
click1.addEventListener("click", scrollIntoView({behavior:"smooth",
block:"center"}));


const click2 = document.getElementById("2");
click2.addEventListener("click", scrollIntoView({behavior:"smooth",
block:"center"}));

const click3 = document.getElementById("3");
click3.addEventListener("click", scrollIntoView({behavior:"smooth",
block:"center"}));


const click4 = document.getElementById("4");
click14.addEventListener("click", scrollIntoView({behavior:"smooth",
block:"center"}));











