import Container from "../ui/Container";
import Button from "../ui/Button";

import "../../styles/hero.css";

function Hero(){

    return(

<section className="hero">

<Container>

<div className="hero-content">

<div className="hero-left">

<h4>Hello, I'm</h4>

<h1>Faraz Ahmed</h1>

<h2>Full Stack Web Developer</h2>

<p>

I build modern, responsive and scalable web
applications with a focus on performance,
clean design and exceptional user experience.

</p>

<div className="hero-buttons">

<Button>

View Projects

</Button>

<Button>

Download Resume

</Button>

</div>

</div>

<div className="hero-right">

<img
src="https://placehold.co/500x500/png"
alt="Profile"
/>

</div>

</div>

</Container>

</section>

    )

}

export default Hero;