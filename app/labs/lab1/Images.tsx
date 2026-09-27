export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      A place I like:
      <br />
      <img
        id="wd-your-image"
        src="/images/anjuna-beach-banner.webp"
        height="200px"
        alt="Anjuna Beach, Goa, India"
      />
      <br />
      A sample image from NASA:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Pillars of Creation in the Eagle Nebula"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg"
      />
    </div>
  );
}