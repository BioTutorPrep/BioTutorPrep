// Expand/collapse subtopics when clicking the title
document.querySelectorAll('.subtopic').forEach(section => {
  const header = section.querySelector('.subtopic-header');

  header.addEventListener('click', (e) => {
    // Prevent dropdown opening when clicking the tickbox
    if (e.target.tagName.toLowerCase() === 'input') return;

    section.classList.toggle('open');
  });
});

// Save tickboxes using localStorage
document.querySelectorAll('input[type="checkbox"]').forEach(box => {
  const id = box.id;

  // Load saved state
  if (localStorage.getItem(id) === "true") {
    box.checked = true;
  }

  // Save new state
  box.addEventListener("change", () => {
    localStorage.setItem(id, box.checked);
  });
});
