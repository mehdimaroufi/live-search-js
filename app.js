const template = document.querySelector("[data-template-item]");
const conateiner = document.querySelector("[items-container]");
const searchInput = document.querySelector("#search");
const resultWrapper = document.querySelector(".search-result");

searchInput.addEventListener("input", (e) => {
    resultWrapper.innerHTML = "";
    resultWrapper.parentElement.classList.add("hidden");
    const value = e.target.value;
    if (value == "") {
        resultWrapper.parentElement.classList.add("hidden");
        return;
    }
    console.log(value)
    let itemTemp;
    fetch("./data.json").then(res => res.json()).then(data => {
        const {fruits} = data;
        fruits.forEach(fruit => {
            if (fruit.name.includes(value)) {

                itemTemp = template.content.cloneNode(true).children[0];
                const fruitName = itemTemp.querySelector("[fruit-name]");
                const fruitDescript = itemTemp.querySelector("[fruit-descript]");
                const fruitImg = itemTemp.querySelector("[fruit-img]");
                fruitName.textContent = fruit.name;
                fruitDescript.textContent = fruit.descript;
                fruitImg.src=fruit.image;
                resultWrapper.append(itemTemp);
                if (resultWrapper.childElementCount != 0) {
                    resultWrapper.parentElement.classList.remove("hidden")
                }else{
                    resultWrapper.parentElement.classList.add("hidden");
                } 

            }

        });
    });
})

fetch("./data.json").then(res => res.json()).then(data => {
    const {fruits} = data;
    fruits.forEach(fruit => {
        let itemTemp = template.content.cloneNode(true).children[0];
        const fruitName = itemTemp.querySelector("[fruit-name]");
        const fruitDescript = itemTemp.querySelector("[fruit-descript]");
        const fruitImg = itemTemp.querySelector("[fruit-img]");
        fruitName.textContent = fruit.name;
        fruitDescript.textContent = fruit.descript;
        fruitImg.src=fruit.image;
        conateiner.append(itemTemp);

    });
});

