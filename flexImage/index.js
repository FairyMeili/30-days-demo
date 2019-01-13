    const imagePanle = document.querySelectorAll(".img1");

    function openList() {
        this.classList.toggle("open")
    }
    // 执行顺序按 color 0.2s, flex 0.7s; 之后开始增加open-active  transform 先后执行
    function textList(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    imagePanle.forEach(item => item.addEventListener("click", openList))
    imagePanle.forEach(item => item.addEventListener('transitionend', textList));