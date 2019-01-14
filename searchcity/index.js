const searchBox = document.querySelector("input");
const list = document.querySelector(".list");
const data = [{
        "city": "New York",
        "growth_from_2000_to_2013": "4.8%",
        "latitude": 40.7127837,
        "longitude": -74.0059413,
        "population": "8405837",
        "rank": "1",
        "state": "New York"
    },
    {
        "city": "Los Angeles",
        "growth_from_2000_to_2013": "4.8%",
        "latitude": 34.0522342,
        "longitude": -118.2436849,
        "population": "3884307",
        "rank": "2",
        "state": "California"
    }
]
// fetch api  url 需要http协议，本地不能测试 
// fetch("./city.json").then(a => a.json()).then(res => {
//     data = res
// })
const queryData = () => {
    console.log(searchBox.value)
    // 遍历查找匹配值渲染 /gi(全文查找、忽略大小写) 
    const filterData = data.filter(item => {
        const regex = new RegExp(searchBox.value, "gi");
        return item.city.match(regex)
    })
    console.log(filterData, "filterData")
    const arrayList = filterData.map(ele => {
        const cityReg = new RegExp(searchBox.value, "gi")
        const cityName = ele.city.replace(cityReg, `<span class="light">${searchBox.value}</span>`)
        return `
            <p>
             ${cityName} <span class="num">
              ${ele.population}
            </span>
            </p>

        `
    }).join("");
    list.innerHTML = arrayList

}
searchBox.addEventListener("keyup", queryData)