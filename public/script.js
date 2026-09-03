// ==========================================================================
// MELWIN SANTHOSH - CLI/IDE INTERACTIVE CONTROLLER
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  const editorCanvas = document.getElementById('editorCanvas');
  const activeBreadcrumb = document.getElementById('activeBreadcrumb');
  const treeItems = document.querySelectorAll('.tree-item[data-target]');
  const editorTabs = document.querySelectorAll('.editor-tab[data-target]');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const ideSidebar = document.getElementById('ideSidebar');

  // Breadcrumb mapping
  const fileNames = {
    'panel-boot': '00_boot.sh',
    'panel-profile': '01_profile.md',
    'panel-experience': 'prax-initiative.ts',
    'panel-projects': 'projects_tree.sh',
    'panel-skills': 'package.json',
    'panel-education': 'education.env',
    'panel-contact': 'contact.sh'
  };

  // Switch Active Tab / Section
  function navigateToSection(targetId) {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    // Smooth scroll into view within the editor canvas
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Update active states
    updateActiveUI(targetId);

    // Close mobile sidebar if open
    if (ideSidebar && ideSidebar.classList.contains('mobile-open')) {
      ideSidebar.classList.remove('mobile-open');
    }
  }

  function updateActiveUI(targetId) {
    // Update tabs
    editorTabs.forEach(tab => {
      if (tab.getAttribute('data-target') === targetId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update sidebar tree items
    treeItems.forEach(item => {
      if (item.getAttribute('data-target') === targetId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update breadcrumb
    if (activeBreadcrumb && fileNames[targetId]) {
      activeBreadcrumb.innerText = fileNames[targetId];
    }
  }

  // Bind Sidebar items
  treeItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      navigateToSection(target);
    });
  });

  // Bind Editor Tabs
  editorTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      navigateToSection(target);
    });
  });

  // Bind Hero Action Buttons
  document.querySelectorAll('button[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-nav');
      navigateToSection(target);
    });
  });

  // Mobile Sidebar Toggle
  if (sidebarToggle && ideSidebar) {
    sidebarToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      ideSidebar.classList.toggle('mobile-open');
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!ideSidebar.contains(e.target) && e.target !== sidebarToggle) {
        ideSidebar.classList.remove('mobile-open');
      }
    });
  }

  // ScrollSpy to update active tab when scrolling through editor canvas
  if (editorCanvas) {
    const sections = document.querySelectorAll('.editor-section');
    editorCanvas.addEventListener('scroll', () => {
      const canvasTop = editorCanvas.getBoundingClientRect().top;
      let currentSectionId = null;

      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top - canvasTop <= 120) {
          currentSectionId = sec.id;
        }
      });

      if (currentSectionId) {
        updateActiveUI(currentSectionId);
      }
    }, { passive: true });
  }

  // Boot Sequence Simulated Counter
  const bootTimer = document.getElementById('bootTimer');
  if (bootTimer) {
    let count = 0;
    const interval = setInterval(() => {
      count += 0.015;
      if (count >= 0.104) {
        count = 0.104;
        clearInterval(interval);
      }
      bootTimer.innerText = count.toFixed(3) + 's';
    }, 40);
  }

  // Interactive Form AJAX Submission
  const ideContactForm = document.getElementById('ideContactForm');
  const ideSubmitBtn = document.getElementById('ideSubmitBtn');
  const ideFormStatus = document.getElementById('ideFormStatus');

  if (ideContactForm) {
    ideContactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) return;

      ideSubmitBtn.disabled = true;
      ideSubmitBtn.innerHTML = '<span class="btn-prompt">$</span> sending...';
      ideFormStatus.style.display = 'none';

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();

        if (res.ok && data.success) {
          ideFormStatus.className = 'form-status-line success';
          ideFormStatus.innerText = `[SUCCESS] Payload delivered. Melwin will reply to: ${email}`;
          ideContactForm.reset();
        } else {
          ideFormStatus.className = 'form-status-line error';
          ideFormStatus.innerText = `[ERROR] ${data.message || 'Delivery failed.'}`;
        }
      } catch (err) {
        ideFormStatus.className = 'form-status-line error';
        ideFormStatus.innerText = `[ERROR] Network failure. Direct email: melwinsanthoah4096@gmail.com`;
      } finally {
        ideSubmitBtn.disabled = false;
        ideSubmitBtn.innerHTML = '<span class="btn-prompt">$</span> send --payload';
      }
    });
  }

});

// Global Function for Interactive Project Directory Toggle
function toggleProject(projectId) {
  const el = document.getElementById(projectId);
  if (!el) return;

  const isExpanded = el.classList.contains('expanded');
  const toggleBtn = el.querySelector('.entry-toggle');

  if (isExpanded) {
    el.classList.remove('expanded');
    if (toggleBtn) toggleBtn.innerText = '[+]';
  } else {
    el.classList.add('expanded');
    if (toggleBtn) toggleBtn.innerText = '[-]';
  }
}

// Global Function for Quick Clipboard Copy
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.innerText;
    btn.innerText = 'copied!';
    btn.style.borderColor = '#10b981';
    btn.style.color = '#10b981';
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 1800);
  });
}
