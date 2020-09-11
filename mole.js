// Write your JS here.
window.addEventListener('DOMContentLoaded', () => {
    // setInterval(() => {
    //     const moleHeads = document.querySelectorAll('.wgs__mole-head');
        // for (let moleHead of moleHeads) {
        //     moleHead.classList.toggle('wgs__mole-head--hidden');
        // }
    // },1000)

    function popUpRandomMole(){
        // let moleHeads = document.querySelectorAll('.wgs__mole-head');
        let randomNumber = Math.floor(Math.random()*8)
        let moleHead = document.getElementById(`${randomNumber}`);
        console.log(moleHead)
        moleHead.classList.remove("wgs__mole-head--hidden");
        setTimeout(hideMole(moleHead), 1000)
    }
    function hideMole (moleHead) {
        // let randomNumber = Math.floor(Math.random()*8)
        // let moleHead = document.getElementById(`${randomNumber}`);
        moleHead.classList.add("wgs__mole-head--hidden");
        setTimeout(popUpRandomMole(), 1000)
    }
    setTimeout(popUpRandomMole(), 0);
});
