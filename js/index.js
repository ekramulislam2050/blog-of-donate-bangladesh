document.getElementById("blog-btn").addEventListener("click",function(e){
   window.location='./index2.html';
   
})
//  card-1--------------------------->
document.getElementById("card-1-donate-btn").addEventListener("click",function(){
    const donatedBdt = getDonateAmount("card-1-input-field");
    if(isNaN(donatedBdt) || 0>donatedBdt){
        alert("Invalid input")
        return
    }
    createElement(donatedBdt,"card-1-h2")
    const availableCardOneBdt = getAvailableAmount("card-1-bdt");
    const currentCardOneBdt = availableCardOneBdt + donatedBdt;
    document.getElementById("card-1-bdt").innerText = currentCardOneBdt +' BDT' ;
    const availableNavBdt = getAvailableAmount("nav-bdt" );
    const currentNavBdt = availableNavBdt + donatedBdt;
    document.getElementById("nav-bdt").innerText = currentNavBdt +' BDT';
    giveCongratulation("my_modal_1")
   
})
// card-2-------------------------------->
document.getElementById("card-2-donate-btn").addEventListener("click",function(){
    const donatedBdt = getDonateAmount("card-2-input-field");
    if(isNaN(donatedBdt) || 0>donatedBdt){
        alert("Invalid input")
        return
    }
    createElement(donatedBdt)
    const availableCardTwoBdt = getAvailableAmount("card-2-bdt");
    const currentCardTwoBdt = availableCardTwoBdt + donatedBdt;
    document.getElementById("card-2-bdt").innerText = currentCardTwoBdt +' BDT' ;
    const availableNavBdt = getAvailableAmount("nav-bdt" );
    const currentNavBdt = availableNavBdt + donatedBdt;
    document.getElementById("nav-bdt").innerText = currentNavBdt +' BDT'
    giveCongratulation("my_modal_1")
})
// card-3------------------------------------->
document.getElementById("card-3-donate-btn").addEventListener("click",function(){
    const donatedBdt = getDonateAmount("card-3-input-field");
    if(isNaN(donatedBdt) || 0>donatedBdt){
        alert("Invalid input")
        return
    }
    createElement(donatedBdt)
    const availableCardThreeBdt = getAvailableAmount("card-3-bdt");
    const currentCardThreeBdt = availableCardThreeBdt + donatedBdt;
    document.getElementById("card-3-bdt").innerText = currentCardThreeBdt +' BDT';
    const availableNavBdt = getAvailableAmount("nav-bdt" );
    const currentNavBdt = availableNavBdt + donatedBdt;
    document.getElementById("nav-bdt").innerText = currentNavBdt +' BDT'
    giveCongratulation("my_modal_1")
})
// history button----------------------------->
document.getElementById("history-btn").addEventListener("click",function(e){
 
    hide("card-1","card-2","card-3","history-section" );

    e.target.style.background='rgb(187, 245, 112)';
    document.getElementById("donation-btn").style.background='none';
    createElement()
});
// donation button--------------------------->
document.getElementById("donation-btn").addEventListener("click",function(e){
    show("card-1","card-2","card-3","history-section");
    e.target.style.background='rgb(187, 245, 112)';
    document.getElementById("history-btn").style.background='none';
})
