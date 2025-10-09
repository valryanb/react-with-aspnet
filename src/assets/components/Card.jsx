export default function Card(props){
  const catName = props.name;
 const catTraits = props.temperament.split(',');
 
 function getTagline(catTraits){
  switch (catTraits[0]) {
    case "Affectionate": return "Born to cuddle!";
    case "Intelligent": return "Super smart!";
    case "Active": return "Loves to play!"; 
    case "Energetic": return "Zoomies expert!"; 
    case "Talkative": return "Chatty catty!";
    case "Curious": return "Explorer kitty!"; 
    case "Loyal": return "Cute and loyal!";
    case "Fun-loving": return "Ready to purr-ty!";
    case "Friendly": return "Let's be besties!";;
    case "Patient": return "Great for kids!";
    default: return "Adopt me today!";
  }
 }

 function nameTooLong(name){
  const maxLength = 12;
  if (name.length <= maxLength) {
    return name;
  }
  else {
    return name.slice(0, maxLength) + "."
  }
}

return (
  <article>
    <div className="match-card">
        <div className="burst"><div className="tagline">{getTagline(catTraits)}</div></div>
      <img src={props.image_url} alt='A photo of a cat' className="cat-head-frame" />
    <h1 className="cat-name">{nameTooLong(catName)}, <span className="cat-country">{props.origin}</span></h1>
    <p className="profile">{props.description}</p>
<ul className="attributes">
  <li>{catTraits[0]}</li>
  <li>{catTraits[1]}</li>
  <li>{catTraits[2]}</li>
</ul>
  </div>
  </article>
)
}