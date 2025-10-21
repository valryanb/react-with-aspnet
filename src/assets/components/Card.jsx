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
  const maxLength = 11;
  if (name.length <= maxLength) {
    return name;
  }
  else {
    return name.slice(0, maxLength) + "."
  }
}

// the API traits data contains a lot of capitalization errors and trailing white space; this sanitizes that before rendering the data

function displayCatTraits(catTraits,index){
  const removedWhitespaceTrait = catTraits[index].trim();
  const sanitizedTrait = removedWhitespaceTrait.charAt(0).toUpperCase() + removedWhitespaceTrait.substr(1).split(" ")[0];
    return sanitizedTrait;
}

function getCardIndex(props){
  if (props.id === 0){
    return "match"
  } else {
    return "top"
  }
}

return (
  <article>
    <div className={`match-card _${props.id} ${getCardIndex(props)}`}>
        <div className="burst"><div className="tagline">{getTagline(catTraits)}</div></div>
      <img src={props.image_url} alt='' className="cat-head-frame"/>
    <h1 className="cat-name">{nameTooLong(catName)}, <span className="cat-country">{props.origin}</span></h1>
    <p className="profile">{props.description.replace(/\\/g, "").split('.', 3).join('.') + "."}</p>
<ul className="attributes">
  <li>{displayCatTraits(catTraits,0)}</li>
  <li>{displayCatTraits(catTraits,1)}</li>
  <li>{displayCatTraits(catTraits,2)}</li>
</ul>
  </div>
  </article>
)
}