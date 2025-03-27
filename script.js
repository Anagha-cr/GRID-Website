document.addEventListener("DOMContentLoaded", () => {
  // Timeline Intersection Observer
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
              } else {
                  entry.target.classList.remove("visible");
              }
          });
      },
      { threshold: 0.3 }
  );

  timelineItems.forEach((item) => {
      observer.observe(item);
  });

  // Tab switching functionality
  const tabs = document.querySelectorAll(".team-tab");
  const teamSections = document.querySelectorAll(".team-members");

  tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
          tabs.forEach((t) => t.classList.remove("active"));
          teamSections.forEach((section) => section.classList.remove("active"));

          tab.classList.add("active");
          const teamId = tab.getAttribute("data-team");
          document.getElementById(teamId).classList.add("active");
      });
  });

  // Smooth scrolling for navigation and footer links
  const navLinks = document.querySelectorAll("nav a[data-section], .nav-link[data-section]");
  navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          const sectionId = link.getAttribute("data-section");
          const targetSection = sectionId === "home"
              ? document.body // Scroll to top for "Home"
              : document.getElementById(sectionId);

          if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

  // Smooth scrolling for footer section headers
  const footerSections = document.querySelectorAll(".footer-section h4");
  footerSections.forEach((header) => {
      header.addEventListener("click", () => {
          const sectionId = header.parentElement.id;
          const targetSection = document.getElementById(sectionId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
});
