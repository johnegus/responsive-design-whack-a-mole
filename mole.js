// Write your JS here.


    function popUpRandomMole(){
        // let moleHeads = document.querySelectorAll('.wgs__mole-head');
        const moleHeads = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--whacked');
        if (moleHeads.length === 0) return alert ("YOU WIN!!!")
        let randomNumber = Math.floor(Math.random()* moleHeads.length);
        let moleHead = moleHeads[randomNumber];
        // console.log(moleHead)
        moleHead.classList.remove("wgs__mole-head--hidden");
        setTimeout(()=>hideMole(moleHead), 3000)
    }
    function hideMole (moleHead) {
        // let randomNumber = Math.floor(Math.random()*8)
        // let moleHead = document.getElementById(`${randomNumber}`);
        moleHead.classList.add("wgs__mole-head--hidden");
        setTimeout(popUpRandomMole, 1000)
    }

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(popUpRandomMole, 0);
    let moleHeads = document.querySelectorAll('.wgs__mole-head');
    for (let moleHead of moleHeads) {
        moleHead.addEventListener('click', event => {
            event.target.classList.add('wgs__mole-head--hidden');
            event.target.classList.add('wgs__mole-head--whacked');

        })
    }
});
