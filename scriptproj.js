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
  const imageModal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeImageModal = document.getElementById('closeImageModal');

  const storageKey = 'upcomingProjects';
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
        <td>${item.project}</td>
        <td>${item.reason}</td>
        <td>${item.details}</td>
        <td>
          ${item.image ? `<img src="${item.image}" alt="project image" style="max-width: 100px; cursor: pointer;" class="thumbnail">` : ''}
        </td>
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

    document.querySelectorAll('.thumbnail').forEach(img => {
      img.addEventListener('click', () => {
        modalImage.src = img.src;
        imageModal.style.display = 'block';
      });
    });
  }

  function openEditModal(index) {
    const item = items[index];
    currentEditIndex = index;

    document.getElementById('project').value = item.project;
    document.getElementById('reason').value = item.reason;
    document.getElementById('details').value = item.details;

    document.getElementById('modalTitle').textContent = 'Edit Project';
    modal.style.display = 'block';
  }

  function openDeleteModal(index) {
    currentDeleteIndex = index;
    deleteModal.style.display = 'block';
  }

  addItemBtn.addEventListener('click', () => {
    currentEditIndex = null;
    itemForm.reset();
    document.getElementById('modalTitle').textContent = 'Add Project';
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');

  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
    if (e.target === deleteModal) deleteModal.style.display = 'none';
    if (e.target === imageModal) imageModal.style.display = 'none';
  });

  closeImageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
  });

  itemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const imageFile = document.getElementById('imageInput').files[0];

    reader.onload = function () {
      const imageData = imageFile ? reader.result : '';

      const newItem = {
        project: document.getElementById('project').value,
        reason: document.getElementById('reason').value,
        details: document.getElementById('details').value,
        image: imageData
      };

      if (currentEditIndex !== null) {
        items[currentEditIndex] = newItem;
      } else {
        items.push(newItem);
      }

      saveToStorage();
      renderTable();
      modal.style.display = 'none';
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      reader.onload(); // call manually if no file selected
    }
  });

  confirmDeleteBtn.addEventListener('click', () => {
    if (currentDeleteIndex !== null) {
      items.splice(currentDeleteIndex, 1);
      saveToStorage();
      renderTable();
      deleteModal.style.display = 'none';
    }
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

  renderTable();
});
