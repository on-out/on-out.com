 class OnoutFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div class='w-full flex flex-col py-[3.75rem] text-center bg-black text-[#666666] text-[0.5rem] leading-[1.25rem] gap-[0.19rem]'>
        <p class=''>(주)온아웃 대표이사 최용우</p>
            <p class='flex gap-[0.75rem] justify-center'><a href='tel:02-876-0508'>02-876-0508</a> <span>고객센터:<a href='mailto:info@on-out.com'>info@on-out.com</a><span></p>
            <p class='flex gap-[0.75rem] justify-center'><span>사업자등록번호 140-81-98548</span></p>
            <p><대구광역시 수성구 알파시티1로 160, 305호</p>
            <p class='flex gap-[0.75rem] justify-center'><span>호스팅 제공자: Amazon Web Service(AWS)</span><span>Copyright © Onout Corp. All Rights Reserved.<span></p>
        </div>`
    }
}

customElements.define('onout-footer', OnoutFooter)