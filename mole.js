// Write your JS here.
window.addEventListener('DOMContentLoaded', () => {
    // setInterval(() => {
    //     const moleHeads = document.querySelectorAll('.wgs__mole-head');
        // for (let moleHead of moleHeads) {
        //     moleHead.classList.toggle('wgs__mole-head--hidden');
        // }
    // },1000)

    function popUpRandomMole(){
        let moleHeads = document.querySelectorAll('.wgs__mole-head');
        let randomNumber = Math.floor(Math.random()*8)
        for (let moleHead of moleHeads) {
            console.log(moleHead);
            moleHead[randomNumber].classList.remove('wgs__mole-head--hidden');
        }
        // randomMole.remove.classList('wgs__mole-head--hidden');
    }
    popUpRandomMole();
});

