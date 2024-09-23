document.getElementById("blog-btn").addEventListener("click",function(e){
   window.location='./index2.html';
   
})
 
document.getElementById("card-1-donate-btn").addEventListener("click",function(){
    const donatedBdt = getDonateAmount("card-1-input-field");
    if(isNaN(donatedBdt) || 0>donatedBdt){
        alert("Invalid input")
        return
    }
    const availableCardOneBdt = getAvailableAmount("card-1-bdt");
    const currentCardOneBdt = availableCardOneBdt + donatedBdt;
    document.getElementById("card-1-bdt").innerText = currentCardOneBdt ;
    const availableNavBdt = getAvailableAmount("nav-bdt" );
    const currentNavBdt = availableNavBdt + donatedBdt;
    document.getElementById("nav-bdt").innerText = currentNavBdt

})