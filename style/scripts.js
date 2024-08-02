window.parent.document.getElementById('button-17').addEventListener('click', showPopup);
window.parent.document.getElementById('button-17').addEventListener('click', changeText);
window.parent.document.getElementById('popup').addEventListener('click', hidePopup);

function showPopup() {
    window.parent.document.getElementById('popup').style.display = 'block';
    window.parent.document.getElementById('button-17').style.display = 'none';
};
function hidePopup() {
    window.parent.document.getElementById('popup').style.display = 'none';
    window.parent.document.getElementById('button-17').style.display = 'block';
};
var texts = [
"Her yıl, insan faaliyetleri atmosfere 40 milyar tCO₂'den fazla salmaktadır.",
"Bir kilogram sığır eti üretimi yaklaşık olarak 26 kgCO₂ emisyonuyla ilişkilidir.",
"Ulaşım sektörü, küresel CO₂ emisyonlarının neredeyse %25'ini oluşturur ve havacılık sektörü büyük bir katkıda bulunur.",
"Ormansızlaşma, küresel karbon emisyonlarının yaklaşık %10'una katkıda bulunur, ağaçlardaki depolanmış karbonun atmosfere salınmasına neden olur.",
"Ağaçlandırma girişimleri gibi bazı karbon dengeleme projeleri, birkaç on yıl içinde dönüm başına 20 tCO₂'ye kadar karbon tutabilir.",
"Elektrikli araç kullanmak, bireyin karbon ayak izini, geleneksel benzinli bir araba ile karşılaştırıldığında, yaklaşık %50 oranında azaltabilir.",
"1 GB veri kullanıldığında yaklaşık 3 kgCO₂ üretilir ve Netflix'te HD kalitesinde bir film izlemek yaklaşık 4.5 kgCO₂ emisyonuna neden olur.",
];

function changeText() {
    var randomIndex = Math.floor(Math.random() * texts.length);
    var newText = texts[randomIndex];

    window.parent.document.getElementById('popupText').innerHTML = newText;
};

if (!window.parent.document.querySelector('[class^=icon2]')) {
    var newDiv = document.createElement('span');
            
    newDiv.className  = 'icon2';

    var button = window.parent.document.querySelector('div[id^=tabs-bui][id$=-tabpanel-4] > div > div > div > div > div > div > div> div > div > div > button[kind = "secondary"] > div');

    button.appendChild(newDiv);
};

if (!window.parent.document.querySelector('[class^=icon3]')) {
    var newDiv2 = document.createElement('span');
            
    newDiv2.className  = 'icon3';

    var button2 = window.parent.document.querySelector('div[id^=tabs-bui][id$=-tabpanel-2] > div > div > div > div > div > div > div> div > div > div > button[kind = "secondary"] > div');

    button2.appendChild(newDiv2);
};
                        
function checkScreenWidth() {
  var screenWidth = window.innerWidth || window.parent.document.documentElement.clientWidth || window.parent.document.body.clientWidth;

  if (screenWidth <= 600) {
            window.parent.document.getElementById('project-copyright').style.display = 'none';
  } else {
            window.parent.document.getElementById('project-copyright').style.display = 'block';
  }
}

window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;
