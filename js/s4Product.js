$(document).ready((function(){gsap.to(".first .pd1",{scrollTrigger:{trigger:"figure.first",start:"top bottom",end:"bottom top",scrub:!0},y:0,x:0}),gsap.to(".first .pd1 img",{scrollTrigger:{trigger:"figure.first",start:"top bottom",end:"bottom top",scrub:!0},rotate:"25deg",x:"-20vw",y:0}),gsap.utils.toArray(".seconds .cool li").forEach(item=>{gsap.to(item,{scrollTrigger:{trigger:"figure.seconds",start:"top bottom",end:"bottom 70%",scrub:!0},x:0,y:0,opacity:1})}),gsap.to(".seconds .cool",{scrollTrigger:{trigger:"figure.seconds",start:"top bottom",end:"bottom top",scrub:!0},x:0,y:0}),gsap.to(".seconds .pd2 img",{scrollTrigger:{trigger:"figure.seconds",start:"top bottom",end:"bottom top",scrub:!0},rotate:"-15deg"}),gsap.to(".seconds .pd3 img",{scrollTrigger:{trigger:"figure.seconds",start:"top bottom",end:"bottom top",scrub:!0},rotate:"5deg"}),gsap.to(".seconds .pd4 img",{scrollTrigger:{trigger:"figure.seconds",start:"top bottom",end:"bottom top",scrub:!0},rotate:"15deg"}),gsap.to(".seconds .pd5 img",{scrollTrigger:{trigger:"figure.seconds",start:"top bottom",end:"bottom top",scrub:!0},rotate:"0"});const parallaxing=gsap.timeline({scrollTrigger:{trigger:"figure.third",start:"top bottom",end:"bottom top",scrub:1.5}});gsap.utils.toArray(".third .mild li").forEach(layer=>{const depth=layer.dataset.depth,movement=-layer.offsetHeight*depth;parallaxing.to(layer,{y:movement,ease:"none"},0)}),gsap.utils.toArray(".third .mild li img").forEach(item=>{const rotation=item.dataset.rot;gsap.to(item,{scrollTrigger:{trigger:"figure.third",start:"top bottom",end:"bottom top",scrub:!0},rotate:rotation,y:0})})}));