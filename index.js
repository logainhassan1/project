const sections= document.querySelectorAll('section')

onscroll=function(){
    const scrollPosistion =document.documentElement.scrollTop;
// loop to every sction to target every sction alone

    sections.forEach(section =>{
        if(scrollPosistion>= section.offsetTop&&
            scrollPosistion< section.offsetTop+ section.offsetHeight){
            // console.log(section.attributes.id);
            const currentId =section.attributes.id.value;

            removeAllActiveClasses();
            addActiveClass(currentId)
           }
    })


}



const removeAllActiveClasses = function () {
    document.querySelectorAll("sections ").forEach((ele) => {
        el.classList.remove("active");
    });
  };


  var addActiveClass = function (id) {
//    console.log(id);
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
  };








