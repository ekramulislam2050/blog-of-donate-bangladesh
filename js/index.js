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
    const availableCardOneBdt = getAvailableAmount("card-1-bdt");
    const currentCardOneBdt = availableCardOneBdt + donatedBdt;
    document.getElementById("card-1-bdt").innerText = currentCardOneBdt +' BDT' ;
    const availableNavBdt = getAvailableAmount("nav-bdt" );
    const currentNavBdt = availableNavBdt + donatedBdt;
    document.getElementById("nav-bdt").innerText = currentNavBdt +' BDT'

})
// card-2-------------------------------->
document.getElementById("card-2-donate-btn").addEventListener("click",function(){
    const donatedBdt = getDonateAmount("card-2-input-field");
    if(isNaN(donatedBdt) || 0>donatedBdt){
        alert("Invalid input")
        return
    }
    const availableCardTwoBdt = getAvailableAmount("card-2-bdt");
    const currentCardTwoBdt = availableCardTwoBdt + donatedBdt;
    document.getElementById("card-2-bdt").innerText = currentCardTwoBdt +' BDT' ;
    const availableNavBdt = getAvailableAmount("nav-bdt" );
    const currentNavBdt = availableNavBdt + donatedBdt;
    document.getElementById("nav-bdt").innerText = currentNavBdt +' BDT'

})
// card-3------------------------------------->
document.getElementById("card-3-donate-btn").addEventListener("click",function(){
    const donatedBdt = getDonateAmount("card-3-input-field");
    if(isNaN(donatedBdt) || 0>donatedBdt){
        alert("Invalid input")
        return
    }
    const availableCardThreeBdt = getAvailableAmount("card-3-bdt");
    const currentCardThreeBdt = availableCardThreeBdt + donatedBdt;
    document.getElementById("card-3-bdt").innerText = currentCardThreeBdt +' BDT';
    const availableNavBdt = getAvailableAmount("nav-bdt" );
    const currentNavBdt = availableNavBdt + donatedBdt;
    document.getElementById("nav-bdt").innerText = currentNavBdt +' BDT'

})