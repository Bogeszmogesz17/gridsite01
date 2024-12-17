/*
const változó deklarálása
értéke nem változtatható
nagy betűvel írni
*/
const SITE = document.querySelector('.site');
console.log("Site: ", SITE)

//gomb eltárolása változóba
const TRIGGER = document.querySelector('.trigger');
console.log("függvény fut", TRIGGER)

/*
függvény létrehozása
1. function
2. szóköz
3. függvény neve
4. kerek zárójel
5. göndör zárójel
6. mi legyen a függvényben 
*/
function revealMenu() {
    SITE.classList.toggle('reveal');

    /*
    1. bemenet: feltétel
    2. bemenet: bármi
    3. bemenet: bármi    

    ha igaz a második fut le ha nem akkor a harmadik
    */
   TRIGGER.innerHTML == 'Close menu' ? TRIGGER.innerHTML = 'Open menu' : TRIGGER.innerHTML = 'Close menu';
   console.log(TRIGGER.innerHTML == 'Close menu')
}

/*
A függvény csak akkor fut le ha meghívjuk// function invocation
az addeventlistener 2 paramétert vár
első: mit figyeljen
második: mi történjen
*/
TRIGGER.addEventListener('click', revealMenu, false);

