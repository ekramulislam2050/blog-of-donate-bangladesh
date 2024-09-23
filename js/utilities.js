function getDonateAmount(id){
  const donateAmount = document.getElementById(id).value ;
  const convertToNumber=parseFloat(donateAmount);
  return convertToNumber;
}