document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('itemModal');
  const addItemBtn = document.getElementById('addItemBtn');
  const closeBtn = document.querySelector('.closeBtn');
  const itemForm = document.getElementById('itemForm');
  const itemsTable = document.querySelector('#itemsTable tbody');
  const searchInput = document.getElementById('searchInput');
  const deleteModal = document.getElementById('deleteModal');
  const confirmDeleteBtn = document.getElementById('confirmDelete');
  const cancelDeleteBtn = document.getElementById('cancelDelete');
  const helpModal = document.getElementById('helpModal');
  const helpBtn = document.getElementById('helpBtn');
  const closeHelpModal = document.getElementById('closeHelpModal');

  const storageKey = 'artItems'; // Unique to homepage
  let items = JSON.parse(localStorage.getItem(storageKey)) || [];
  let currentEditIndex = null;
  let currentDeleteIndex = null;

  function saveToStorage() {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }

  function renderTable() {
    itemsTable.innerHTML = '';
    items.forEach((item, index) => {
      const row = itemsTable.insertRow();
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.brand}</td>
        <td>${item.category}</td>
        <td>${item.from}</td>
        <td>${item.review}</td>
        <td>
          <button class="editBtn" data-index="${index}">Edit</button>
          <button class="deleteBtn" data-index="${index}">Delete</button>
        </td>
      `;
    });

    document.querySelectorAll('.editBtn').forEach(btn =>
      btn.addEventListener('click', () => openEditModal(btn.dataset.index))
    );

    document.querySelectorAll('.deleteBtn').forEach(btn =>
      btn.addEventListener('click', () => openDeleteModal(btn.dataset.index))
    );
  }

  function openEditModal(index) {
    const item = items[index];
    currentEditIndex = index;

    document.getElementById('productName').value = item.name;
    document.getElementById('brand').value = item.brand;
    document.getElementById('category').value = item.category;
    document.getElementById('purchasedFrom').value = item.from;
    document.getElementById('review').value = item.review;

    document.getElementById('modalTitle').textContent = 'Edit Item';
    modal.style.display = 'block';
  }

  function openDeleteModal(index) {
    currentDeleteIndex = index;
    deleteModal.style.display = 'block';
  }

  addItemBtn.addEventListener('click', () => {
    currentEditIndex = null;
    itemForm.reset();
    document.getElementById('modalTitle').textContent = 'Add Item';
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
    if (e.target === deleteModal) deleteModal.style.display = 'none';
  });

  itemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newItem = {
      name: document.getElementById('productName').value,
      brand: document.getElementById('brand').value,
      category: document.getElementById('category').value,
      from: document.getElementById('purchasedFrom').value,
      review: document.getElementById('review').value
    };

    if (currentEditIndex !== null) {
      items[currentEditIndex] = newItem;
    } else {
      items.push(newItem);
    }

    saveToStorage();
    renderTable();
    modal.style.display = 'none';
  });

  confirmDeleteBtn.addEventListener('click', () => {
    if (currentDeleteIndex !== null) {
      items.splice(currentDeleteIndex, 1);
      saveToStorage();
      renderTable();
      deleteModal.style.display = 'none';
    }
  });

  cancelDeleteBtn.addEventListener('click', () => {
    deleteModal.style.display = 'none';
  });

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    Array.from(itemsTable.rows).forEach(row => {
      const name = row.cells[0].textContent.toLowerCase();
      row.style.display = name.includes(filter) ? '' : 'none';
    });
  });

  helpBtn.addEventListener('click', () => {
    helpModal.style.display = 'block';
  });
  
  closeHelpModal.addEventListener('click', () => {
    helpModal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === helpModal) {
      helpModal.style.display = 'none';
    }
  });

  // Load from localStorage on startup
  renderTable();
});
