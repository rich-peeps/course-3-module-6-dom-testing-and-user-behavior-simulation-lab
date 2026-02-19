// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.
// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.


if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const simulateBtn = document.getElementById('simulate-click');
    const form = document.getElementById('user-form');

    if (simulateBtn) {
      simulateBtn.addEventListener('click', () => {
        simulateClick('dynamic-content', 'Button Clicked!');
      });
    }

    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        handleFormSubmit('user-form', 'dynamic-content');
      });
    }
  });
}

function simulateClick(targetId, content) {
  addElementToDOM(targetId, content);
}

function addElementToDOM(targetId, content) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.textContent = content;
}

function removeElementFromDOM(elementId) {
  const el = document.getElementById(elementId);
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId);
  const input = document.getElementById('user-input');
  const target = document.getElementById(targetId);
  const errorEl = document.getElementById('error-message');

  if (!form || !input || !target || !errorEl) return;

  const value = input.value.trim();

  if (value === '') {
    errorEl.textContent = 'Input cannot be empty';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.textContent = '';
  errorEl.classList.add('hidden');

  target.textContent = value;
}


module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
