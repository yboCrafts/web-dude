app = {
    init(selectors) {
        this.scroll_dude = document.querySelector('#scroll-dude');
        this.message = document.querySelector('.message');
        this.burger = document.querySelector('.burger');
        this.dude = document.querySelector('#dude-img');

        this.burger.addEventListener('click', () => {
            const box = document.querySelectorAll('.burger div');
            const list = document.querySelector('.right-nav-items');

            box.forEach((element, index) => {                                
                switch(index) {
                    case 0:
                        box[index].classList.toggle('transition-box1');
                        break;
                    case 1:
                        box[index].classList.toggle('transition-box2');
                        break;
                    case 2:
                        box[index].classList.toggle('transition-box3');
                        break;
                }
            });

            list.classList.toggle('right-nav-items-show');
        });

        this.dude.addEventListener('mouseover', (ev) => {            
            ev.target.src = 'img/dude-wave.svg'
        });
        this.dude.addEventListener('mouseout', (ev) => {            
            ev.target.src = 'img/dude-portrait.svg'
        });

        this.scroll_dude.addEventListener('click', () => {
            this.scroll_dude.classList.toggle('transition-scroll-dude');
            this.message.classList.toggle('transition-message');            
        });
    },
}

app.init();