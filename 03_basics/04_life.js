//// Immediately Invocked Function Expressions ( IIFE )

(function chai (){
    console.log(`DB CONECTED`);

})();

((name) => {
    console.log(`DB CONNECTED Two ${name}`);
    
})(`hitesh`)

