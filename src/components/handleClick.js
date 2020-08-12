//HANDLE CLICK ****************************************************
function handleChick(e) {

  console.log(`manejando click ${e.target.className}`)
  const firstDiv = document.getElementById('___gatsby');
    //OPEN DRAW *********************************
    if (e.target.classList.contains('btn-menu')) {
      console.log(`Draw`)
      firstDiv.classList.toggle('openDraw')
    }

    //OPEN DRAW *********************************
    if (e.target.classList.contains('btn-menu')) {
      console.log(`gotop`)
    }



}





export default handleChick;

