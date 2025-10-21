export default function SwipeBar(){

  function shuffleCards(){
   return document.querySelector("._1").style.animation = "animation: cardShuffle 1s ease-out forwards";

  }
  
    return (
          <div id="swipe-bar" role="slider">
    <div id="paw" onClick={shuffleCards} role="button" alt="A thumb bar for swiping in the shape of a cat paw">
    </div>
  </div>
    )
}