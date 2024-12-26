    const checkbox = document.getElementById('toggle-dark-mode');
    const modeText = document.getElementById('mode-text');

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        modeText.textContent = 'Claro';
      } else {
        modeText.textContent = 'Escuro';
      }
    });

    