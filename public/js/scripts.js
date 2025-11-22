$(function () {
  // hero-title
  $(".hero__content > *").css({
    opacity: 0,
    position: "static",
    top: "20px",
  });
  $(".hero__content > *").each(function (index) {
    $(this)
      .delay(index * 300)
      .animate({ opacity: 1, top: 0 }, 1000);
  });

  //hero-img
  $(".images-grid div img").css("opacity", 0);
  $(".images-grid div img").each(function () {
    $(this).delay(500).animate({ opacity: 1 }, 1000);
  });

  // mobail menu
  $(".cross").hide();
  $(".menu").hide();
  $(".hamburger").on("click", function () {
    $(".nav_list_mobail li").on("click", function () {
      $(".cross").hide();
      $(".menu").hide();
      $(".hamburger").show();
      $("body").removeClass("no-scroll");
    });
    $(".social_list li a").on("click", function () {
      $(".cross").hide();
      $(".menu").hide();
      $(".hamburger").show();
      $("body").removeClass("no-scroll");
    });
    $(".menu").slideToggle("slow", function () {
      $(".hamburger").hide();
      $(".cross").show();
      $("body").addClass("no-scroll");
    });
  });

  $(".cross").on("click", function () {
    $(".menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
      $("body").removeClass("no-scroll");
    });
  });
});


//animation
const featuresElements = document.querySelectorAll(".features__grid > *");
const aboutElements = document.querySelectorAll(".about__content > *");
const serviceElements = document.querySelectorAll(".service-card");
const pricingElements = document.querySelectorAll(".pricing-card");
const contactCards = document.querySelectorAll(".contact-card");

// Флаг для каждой секции
let featuresAnimated = false;
let aboutAnimated = false;
let servicesAnimated = false;
let pricingAnimated = false;
let contactAnimated = false;

// ------------------------------------------------------------------
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

featuresElements.forEach((el) => observer.observe(el));

// ------------------------------------------------------------------
const observerAbout = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !aboutAnimated) {
        aboutAnimated = true; 

        aboutElements.forEach((el, index) => {
          setTimeout(() => {
            $(el).addClass("visible");
          }, index * 50); 
        });

        observer.disconnect();
      }
    });
  },
  { threshold: 0.1 }
);

aboutElements.forEach((el) => observerAbout.observe(el));

//---------------------------------------------------------------------
const observerServices = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

serviceElements.forEach((el) => observerServices.observe(el));

// ---------------------------------------------------------------------
const observerPricing = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);


pricingElements.forEach((el) => observerPricing.observe(el));

// ---------------------------------------------------------------------
const observerContacts = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !contactAnimated) {
        contactAnimated = true;

        contactCards.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("visible");
          }, index * 300); 
        });

        observer.disconnect();
      }
    });
  },
  { threshold: 0.2 }
);

contactCards.forEach((el) => observerContacts.observe(el));
