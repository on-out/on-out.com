class onoutSection2 extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div class='w-full bg-[#111111] flex flex-col gap-[5.5rem] items-center justify-center sm:py-[7.5rem] pt-[7.5rem]'>
        
        <div class='max-w-[52.5rem] w-full h-full flex justify-center items-center'>
            <picture class='max-w-[60rem] w-full h-full flex justify-center items-center px-[1.25rem] sm:px-[3rem]'>
                <source srcset='/docs/images/sections/mobile/section2.png' media="(max-width: 640px)" />
                <img src='/docs/images/sections/pc/section2.png' />
            </picture>    
        </div>
        <div class='max-w-[60rem] w-full bg-black py-[3rem] flex flex-col gap-[1rem]'><p class='text-white text-[1rem] leading-[1.5rem] font-bold text-center'>앱다운로드 하기</p>
        <div class='flex items-center w-full justify-center flex gap-[0.77rem]'>
        <a href='https://play.google.com/store/apps/details?id=com.onout.app' target='_blank'>
        <img src='/docs/icons/store/google.svg' class='w-[7.38rem] sm:w-[11.5rem]'  />
        </a>
        <a href='https://apps.apple.com/app/id6446235118' target='_blank'>
        <img src='/docs/icons/store/apple.svg'  class='w-[7.38rem] sm:w-[11.5rem]'' />
        </a>
        </div>
        </div>`
    }
}

customElements.define('onout-section2', onoutSection2)