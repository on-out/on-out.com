class onoutHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div class='w-full flex justify-center bg-black'><div class='max-w-[90rem] w-full py-[1.25rem] px-[1.25rem] sm:px-[3rem] flex justify-start items-center gap-[0.25rem]'><img class='h-[1.5rem] object-center' src='../icons/LOGO.svg' /><span class='text-[#9D9D9D] text-[1rem]'>fashion app</div></div>`
    }
}

customElements.define('onout-header', onoutHeader)