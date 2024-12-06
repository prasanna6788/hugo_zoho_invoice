const im = document.querySelector('.mobile-wall');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

   if (scrollY >= 500 && scrollY <= 1000) {
   im.src = '/images/send-paymentreminder-2x.webp';
    }
   else if (scrollY >= 1000 && scrollY <= 1400) {
   im.src = '/images/invoice-dashboard-2x (1).webp';
    }
   else if (scrollY >= 1400 && scrollY <= 2100) {
   im.src = '/images/received-payment-2x.webp';
    }
   else{
   im.src = '/images/create-invoice-2x.webp';
    }
    console.log("scrolly========",scrollY);
});
const create1 = document.querySelector('.create');
const send1 = document.querySelector('.send');
const received1 = document.querySelector('.received');

create1.addEventListener('click', () => {
  console.log("create");
  create1.style.background = "#0075ff";
  send1.style.background = "black";
  received1.style.background = "black";
  im.src = '/images/create-invoice-2x.webp';
});

send1.addEventListener('click', () => {
  console.log("send");
  send1.style.background = "#0075ff"; 
  create1.style.background = "black";
  received1.style.background = "black";
  im.src = '/images/send-paymentreminder-2x.webp';
});

received1.addEventListener('click', () => {
  console.log("received");
  received1.style.background = "#0075ff"; 
  create1.style.background = "black";
  send1.style.background = "black";
  im.src = '/images/received-payment-2x.webp';
});
