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

function giveCongratulation (id){
  const myModal = document.getElementById(id);
  const showModal = myModal.showModal();
  return showModal;
}

function hide(id_1,id_2,id_3,h_s){
  document.getElementById(id_1).classList.add("hidden");
  document.getElementById(id_2).classList.add("hidden");
  document.getElementById(id_3).classList.add("hidden");
  document.getElementById(h_s).classList.remove("hidden");
}
function show(id_1,id_2,id_3,h_s){
  document.getElementById(id_1).classList.remove("hidden");
  document.getElementById(id_2).classList.remove("hidden");
  document.getElementById(id_3).classList.remove("hidden");
  document.getElementById(h_s).classList.add("hidden");
}

function createElement(donatedTk,id){
   const h2Text = document.getElementById(id).innerText

     const historySection = document.getElementById("history-section");
     const newDiv = document.createElement("div");
     newDiv.style.border='1px solid gray';
     newDiv.style.borderRadius='5px';
     newDiv.style.width='80%';
     newDiv.style.margin='2px auto';
     newDiv.innerHTML=`
      <h1 class="text-xl text-center">${donatedTk} tk ${h2Text}</h1>
      <p class="text-center">${new Date()}</p>
     `
     historySection.appendChild(newDiv)
    
 
}