export default function Card(props){
return (
  <article>
    <div class="match-card">
        <div class="burst"><div class="tagline">{props.tagline}</div></div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/08.12BarinN23-r2.jpg" alt='A photo of a cat' class="cat-head-frame" />
    <h1 class="cat-name">{props.breed}, <span class="cat-country">{props.country_code}</span></h1>
    <p class="profile">{props.bio}</p>
<ul class="attributes">
  <li>{props.attributes.one}</li>
  <li>{props.attributes.two}</li>
  <li>{props.attributes.three}</li>
</ul>
  </div>
  </article>
)
}