function getDonateAmount(id){
  const donateAmount = document.getElementById(id).value ;
  const convertToNumber = parseFloat(donateAmount);
  return convertToNumber;
}
function getAvailableAmount(id){
    const availableAmount = document.getElementById(id).innerText;
    const convertToNumber = parseFloat(availableAmount);
    return convertToNumber
}