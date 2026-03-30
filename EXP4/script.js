const form = document.getElementById('jobEntryForm');
const board = document.getElementById('jobBoard');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page reload

    // 1. Get values
    const title = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const desc = document.getElementById('description').value;

    // 2. Create the Card Element
    const card = document.createElement('div');
    card.classList.add('job-card');

    // 3. Set the internal content
    card.innerHTML = `
        <h3>${title}</h3>
        <p class="company-tag">${company}</p>
        <p class="loc">📍 ${location}</p>
        <p class="desc">${desc}</p>
        <button onclick="this.parentElement.remove()" style="background: #e74c3c; width: auto; font-size: 0.8rem;">Delete</button>
    `;

    // 4. Add to the board
    board.appendChild(card);

    // 5. Clear the form for the next entry
    form.reset();
});
