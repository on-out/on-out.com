class onoutSection1 extends HTMLElement {
    connectedCallback(){
        


        this.innerHTML = `<div class='w-full pt-[5rem] sm:pb-[5rem] bg-[#060606] flex items-center justify-center'>
                            <picture class='max-w-[60rem] w-full h-full flex justify-center items-center px-[1.25rem] sm:px-[3rem]'>
                                <source srcset='/docs/images/sections/mobile/section1.png' media="(max-width: 640px)" />
                                <img src='/docs/images/sections/pc/section1.png' />
                            </picture>
                        <div>`
    }
}

customElements.define('onout-section1', onoutSection1)