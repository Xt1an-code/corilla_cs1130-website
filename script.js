function el(id){return document.getElementById(id);}
function say(id,text,bad){var o=el(id);o.className=bad?'err':'';o.innerHTML=text;}
function peso(x){return '₱'+x.toLocaleString('en-PH',{minimumFractionDigits:2,maximumFractionDigits:2});}

function celsiusToF(){
  var c=parseFloat(el('c').value);
  if(isNaN(c)){say('c-out','Enter a number.',true);return;}
  say('c-out',c+' °C = '+(c*9/5+32).toFixed(2)+' °F');
}
function fahrenheitToC(){
  var f=parseFloat(el('f').value);
  if(isNaN(f)){say('f-out','Enter a number.',true);return;}
  say('f-out',f+' °F = '+((f-32)*5/9).toFixed(2)+' °C');
}
function metersToFeet(){
  var m=parseFloat(el('m').value);
  if(isNaN(m)){say('m-out','Enter a number.',true);return;}
  say('m-out',m+' m = '+(m*3.28084).toFixed(2)+' ft');
}
function feetToMeters(){
  var ft=parseFloat(el('ft').value);
  if(isNaN(ft)){say('ft-out','Enter a number.',true);return;}
  say('ft-out',ft+' ft = '+(ft/3.28084).toFixed(2)+' m');
}

function taxFor(income){
  if(income<=250000) return 0;
  else if(income<=400000) return (income-250000)*0.15;
  else if(income<=800000) return 22500+(income-400000)*0.20;
  else if(income<=2000000) return 102500+(income-800000)*0.25;
  else if(income<=8000000) return 402500+(income-2000000)*0.30;
  else return 2202500+(income-8000000)*0.35;
}
function calcTax(){
  var income=parseFloat(el('income').value);
  if(isNaN(income)||income<0){say('tax-out','Enter an income of 0 or more.',true);return;}
  var tax=taxFor(income);
  say('tax-out','Income tax: '+peso(tax)+'<div>Take-home after tax: '+peso(income-tax)+'. Effective rate: '+(income?(tax/income*100).toFixed(2):'0.00')+'%.</div>');
}

function readN(){
  var n=parseInt(el('n').value,10);
  return (isNaN(n)||n<1)?null:n;
}
function factorial(){
  var n=readN();
  if(n===null){say('fact-out','Enter a whole number of 1 or more.',true);return;}
  if(n>170){say('fact-out','Use N of 170 or less. Larger factorials overflow JavaScript numbers.',true);return;}
  var result=1, i=1;
  while(i<=n){ result=result*i; i++; }
  say('fact-out',n+'! = '+(result>1e15?result.toExponential(6):result.toLocaleString()));
}
function sumN(){
  var n=readN();
  if(n===null){say('sum-out','Enter a whole number of 1 or more.',true);return;}
  var sum=0, i=1;
  do { sum=sum+i; i++; } while(i<=n);
  say('sum-out','1 + 2 + … + '+n+' = '+sum.toLocaleString());
}
function averageN(){
  var n=readN();
  if(n===null){say('avg-out','Enter a whole number of 1 or more.',true);return;}
  var total=0;
  for(var i=1;i<=n;i++){ total=total+i; }
  say('avg-out','Average of 1 to '+n+' = '+(total/n).toFixed(2));
}

function computePayroll(){
  var name=el('emp').value.trim()||'Employee';
  var hours=parseFloat(el('hours').value), rate=parseFloat(el('rate').value);
  if(isNaN(hours)||isNaN(rate)||hours<0||rate<0){say('pay-out','Enter hours and rate as numbers of 0 or more.',true);return;}
  var regular=Math.min(hours,40), overtime=Math.max(hours-40,0);
  var regularPay=regular*rate, overtimePay=overtime*rate*1.25;
  var gross=regularPay+overtimePay;
  var sss=gross*0.045, philhealth=gross*0.025, pagibig=gross>0?200:0;
  var net=gross-sss-philhealth-pagibig;
  say('pay-out','Payslip for '+name+'<div>Regular pay ('+regular+' h): '+peso(regularPay)+'<br>Overtime pay ('+overtime+' h): '+peso(overtimePay)+'<br>Gross pay: '+peso(gross)+'<br>SSS: '+peso(sss)+' · PhilHealth: '+peso(philhealth)+' · Pag-IBIG: '+peso(pagibig)+'<br><strong>Net pay: '+peso(net)+'</strong></div>');
}

/* Tabs, with the tab name kept in the page link (#conversion, #tax, #loops, #payroll) */
var tabs=document.querySelectorAll('#tabs button');
function showTab(){
  var name=location.hash.slice(1)||'conversion';
  if(!el(name)) name='conversion';
  document.querySelectorAll('main section').forEach(function(s){s.hidden=(s.id!==name);});
  tabs.forEach(function(b){b.setAttribute('aria-selected',b.dataset.t===name);});
}
tabs.forEach(function(b){b.onclick=function(){location.hash=b.dataset.t;};});
window.addEventListener('hashchange',showTab);
showTab();
document.querySelectorAll('nav button').forEach(function (b) {
  b.addEventListener('mousemove', function (e) {
    var r = b.getBoundingClientRect();
    b.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    b.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});
/* "Show the code" prints the real source of the functions above */
document.querySelectorAll('[data-fns]').forEach(function(btn){
  btn.onclick=function(){
    var pre=btn.nextElementSibling;
    if(pre.hidden){
      pre.textContent=btn.dataset.fns.split(',').map(function(f){return window[f].toString();}).join('\n\n');
      pre.hidden=false; btn.textContent='Hide the code';
    } else { pre.hidden=true; btn.textContent='Show the code'; }
  };
});
(function () {
  var intro = document.getElementById('intro');
  var out = document.getElementById('intro-text');
  var msg = 'ACCESSING CS Xtian Website...';
  var i = 0;

  function finish() {
    intro.classList.add('done');
    document.body.classList.add('loaded');
    setTimeout(function () { intro.remove(); }, 700);
  }
  function type() {
    if (i < msg.length) {
      out.textContent += msg.charAt(i++);
      setTimeout(type, 60);
    } else {
      out.textContent = 'ACCESS GRANTED';
      setTimeout(finish, 600);
    }
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); }
  else { type(); }
})();
