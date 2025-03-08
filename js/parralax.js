// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Target all elements with `.control` class dynamically
gsap.utils.toArray(".control").forEach((element) => {
  let direction = element.id === "left" ? -1000 : 1000; // Left moves from right, right moves from left

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",  // Adjust this value if needed
      end: "top 30%",
      scrub: true,
    },
    x: direction,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });
});




gsap.utils.toArray(".tl").forEach((element) => {
  let isHovered = false;

  element.addEventListener("mouseenter", () => {
    isHovered = true;
    gsap.to(element, { y: -7, scale: 1.05, duration: 0.2 }); // Matches CSS hover effect
  });

  element.addEventListener("mouseleave", () => {
    isHovered = false;
    gsap.to(element, { y: 0, scale: 1, duration: 0.2, clearProps: "all" }); // Resets hover state
  });

  gsap.utils.toArray(".tl").forEach((element) => {
    let isHovered = false;

    // Hover effect for the current element
    element.addEventListener("mouseenter", () => {
      isHovered = true;
      gsap.to(element, { y: -7, scale: 1.05, duration: 0.2 }); // Matches CSS hover effect

      // Apply scaling to non-hovered siblings
      gsap.utils.toArray(".tl").forEach((sibling) => {
        if (sibling !== element) {
          gsap.to(sibling, { scale: 0.9, duration: 0.1 }); // Immediate scaling
        }
      });
    });

    element.addEventListener("mouseleave", () => {
      isHovered = false;
      gsap.to(element, { y: 0, scale: 1, duration: 0.2, clearProps: "all" }); // Resets hover state

      // Reset scaling for all siblings
      gsap.utils.toArray(".tl").forEach((sibling) => {
        gsap.to(sibling, { scale: 1, duration: 0.1 }); // Reset scaling
      });
    });

    // Scroll effect that doesn't interfere with hover
    gsap.fromTo(
      element,
      { y: 100, skewX: 15 },
      {
        y: 0,
        skewX: 0,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
          onUpdate: (self) => {
            if (!isHovered) {
              gsap.to(element, {
                y: self.progress * -100 + 100,
                skewX: self.progress * -10 + 10,
                overwrite: "auto", // Ensures GSAP doesn't interfere
              });
            }
          },
        },
      }
    );
  });
});