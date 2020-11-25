const rsd = document.getElementById('dinar');
const eur = document.getElementById('euro');
const usd = document.getElementById('dolar');
const chf = document.getElementById('franak');

rsd.addEventListener('input', dinar);

function dinar() {
    const dinarRSD = parseInt(rsd.value);
    const euroE = 0.0085 * dinarRSD;
    const usdD = 0.010 * dinarRSD;
    const chfSwiss = 0.0092 * dinarRSD;
    eur.value = euroE;
    usd.value = usdD;
    chf.value = chfSwiss;
}

eur.addEventListener('input', euro);

function euro() {
    const euroE = parseInt(eur.value);
    const dinarRSD = 117.5701 * euroE;
    const usdD = 1.18 * euroE;
    const chfSwiss = 1.08 * euroE;
    rsd.value = dinarRSD;
    usd.value = usdD;
    chf.value = chfSwiss;
}

usd.addEventListener('input', dolar);

function dolar() {
    const dollar = parseInt(usd.value);
    const dinarRSD = 99.36 * dollar;
    const euroE = 0.85 * dollar;
    const chfSwiss = 0.91 * dollar;
    rsd.value = dinarRSD;
    eur.value = euroE;
    chf.value = chfSwiss;
}

chf.addEventListener('input', chfS);

function chfS() {
    const chfSwiss = parseInt(chf.value);
    const dinarRSD = 108.78 * chfSwiss;
    const euroE = 0.93 * chfSwiss;
    const usdD = 1.10 * chfSwiss;
    rsd.value = dinarRSD;
    eur.value = euroE;
    usd.value = usdD;
}

var api = "https://kurs.resenje.org/api/v1/currencies/eur/rates/today";
$('#view-doctors').on('click',function() {      
   var button = $(this);      
   $.ajax({
      url:api,
      method:'GET',
      cache:false,
      type:"text/json"
   })
   .always(function(){
      $(button).html('Load Doctor Data...');
   })
   .done(function(evt) {
      // Disable button
      $(button).prop('disabled',true);
      // Set timeout for lazy loading
      setTimeout(function(){
         var result = JSON.parse(evt);
         var html = '<h2>Data Dokter</h2>';
         html += '<div class="tables-doctor-content">';
         for(var i=0;i < result.Data.length; i++) {
            html +='<h3 class="tables-doctor-name">'+result.Data[i].DoctorName+'</h3>'
               +'<p class="tables-doctor-title">'+result.Data[i].Specialist+'</p>';

            if(result.Data[i].Hospitals.length > 0) {  
               html +='<table class="table">'
                  +'<thead>'
                  +'<tr>'
                  +'<th scope="col">Nama Rumah Sakit</th>'
                  +'<th scope="col">Alamat</th>'
                  +'<th scope="col">Jadwal Praktek</th>'
                  +'</tr>'
                  +'</thead>'
                  +'<tbody>';

               for(var j=0;j < result.Data[i].Hospitals.length; j++) {
                  html +='<tr>'
                     +'<th scope="row">'+result.Data[i].Hospitals[j].Name+'</th>'
                     +'<td>'+result.Data[i].Hospitals[j].Address+'</td>'
                     +'<td>'+result.Data[i].Hospitals[j].Schedule+'</td>'
                     +'</tr>';
               }
               html +='</tbody></table>';
            }
         }
          html +='</div>';

         // Set all content
         $('.tables-doctor').html(html);

      },1000); 
   })
   .fail(function() {
      alert('Error : Failed to reach API Url or check your connection');
      $(button).prop('disabled',false);
   })
   .then(function(evt){
      setTimeout(function(){        
         $(button).css({'background-color':'#ccc'}).hide();          
      },1000);
   });
});