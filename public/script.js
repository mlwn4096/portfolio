// ==========================================================================
// MELWIN SANTHOSH - CLI/IDE PORTFOLIO JAVASCRIPT CONTROLLER
// Zero em dashes, zero unnecessary dependencies, crisp micro-interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  const editorCanvas = document.getElementById('editorCanvas');
  const activeBreadcrumb = document.getElementById('activeBreadcrumb');
  const treeItems = document.querySelectorAll('.tree-item[data-target]');
  const editorTabs = document.querySelectorAll('.editor-tab[data-target]');
  const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
  const ideSidebar = document.getElementById('ideSidebar');

  // Breadcrumb File Mappings
  const fileLabels = {
    'panel-boot': '00_boot.sh',
    'panel-profile': '01_profile.md',
    'panel-experience': 'prax_initiative.ts',
    'panel-projects': 'project_directory.sh',
    'panel-demo': 'prax_live_demo.tsx',
    'panel-skills': 'package.json',
    'panel-education': 'education.env',
    'panel-contact': 'contact.sh',
    'panel-legal': 'legal_policy.md'
  };

  // Section Navigation
  function navigateSection(targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateActiveStates(targetId);

    if (ideSidebar && ideSidebar.classList.contains('mobile-open')) {
      ideSidebar.classList.remove('mobile-open');
    }
  }

  function updateActiveStates(targetId) {
    editorTabs.forEach(tab => {
      if (tab.getAttribute('data-target') === targetId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    treeItems.forEach(item => {
      if (item.getAttribute('data-target') === targetId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    if (activeBreadcrumb && fileLabels[targetId]) {
      activeBreadcrumb.innerText = fileLabels[targetId];
    }
  }

  // Bind Sidebar items
  treeItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      navigateSection(target);
    });
  });

  // Bind Top Editor Tabs
  editorTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      navigateSection(target);
    });
  });

  // Bind Hero Action Buttons
  document.querySelectorAll('button[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-nav');
      navigateSection(target);
    });
  });

  // Mobile Sidebar Toggle
  if (mobileSidebarBtn && ideSidebar) {
    mobileSidebarBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      ideSidebar.classList.toggle('mobile-open');
    });

    document.addEventListener('click', (e) => {
      if (!ideSidebar.contains(e.target) && e.target !== mobileSidebarBtn) {
        ideSidebar.classList.remove('mobile-open');
      }
    });
  }

  // ScrollSpy to update active tab based on scroll position
  if (editorCanvas) {
    const sections = document.querySelectorAll('.editor-block');
    editorCanvas.addEventListener('scroll', () => {
      const canvasTop = editorCanvas.getBoundingClientRect().top;
      let activeId = null;

      sections.forEach(sec => {
        const r = sec.getBoundingClientRect();
        if (r.top - canvasTop <= 130) {
          activeId = sec.id;
        }
      });

      if (activeId) {
        updateActiveStates(activeId);
      }
    }, { passive: true });
  }

  // Simulated Boot Timer
  const bootCounter = document.getElementById('bootCounter');
  if (bootCounter) {
    let count = 0;
    const timer = setInterval(() => {
      count += 0.012;
      if (count >= 0.104) {
        count = 0.104;
        clearInterval(timer);
      }
      bootCounter.innerText = count.toFixed(3) + 's';
    }, 45);
  }

  // Contact Form AJAX with Skeleton Loader
  const contactForm = document.getElementById('contactForm');
  const formSubmitButton = document.getElementById('formSubmitButton');
  const formNotification = document.getElementById('formNotification');
  const formSkeleton = document.getElementById('formSkeleton');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('cName').value.trim();
      const email = document.getElementById('cEmail').value.trim();
      const message = document.getElementById('cMsg').value.trim();

      if (!name || !email || !message) return;

      // Activate Skeleton Loader State
      formSubmitButton.disabled = true;
      formSubmitButton.style.display = 'none';
      if (formSkeleton) formSkeleton.style.display = 'block';
      formNotification.style.display = 'none';

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();

        // Small simulated delay to demonstrate skeleton loader
        await new Promise(r => setTimeout(r, 600));

        if (res.ok && data.success) {
          formNotification.className = 'form-feedback-line success';
          formNotification.innerText = `[SUCCESS] Payload delivered. Melwin will reply to: ${email}`;
          contactForm.reset();
        } else {
          formNotification.className = 'form-feedback-line error';
          formNotification.innerText = `[ERROR] ${data.message || 'Delivery failed.'}`;
        }
      } catch (err) {
        formNotification.className = 'form-feedback-line error';
        formNotification.innerText = `[ERROR] Connection error. Direct email: melwinsanthoah4096@gmail.com`;
      } finally {
        if (formSkeleton) formSkeleton.style.display = 'none';
        formSubmitButton.style.display = 'inline-flex';
        formSubmitButton.disabled = false;
      }
    });
  }

});

// Global Function: Project Directory Tree Expansion Toggle
function toggleProjCard(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const isExpanded = el.classList.contains('expanded');
  const toggleTxt = el.querySelector('.toggle-indicator');

  if (isExpanded) {
    el.classList.remove('expanded');
    if (toggleTxt) toggleTxt.innerText = '[+]';
  } else {
    el.classList.add('expanded');
    if (toggleTxt) toggleTxt.innerText = '[-]';
  }
}

// Global Function: Product Demo Tab Switcher
function switchDemoTab(tabName, btn) {
  const allTabs = document.querySelectorAll('.demo-tab');
  allTabs.forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const allPanels = document.querySelectorAll('.demo-view-panel');
  allPanels.forEach(p => p.classList.remove('active'));

  const activePanel = document.getElementById('demo-' + tabName);
  if (activePanel) {
    activePanel.classList.add('active');
  }
}

// Global Function: Legal Policies Tab Switcher
function switchLegalTab(tabName, btn) {
  const allBtns = document.querySelectorAll('.legal-nav-btn');
  allBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const allPanes = document.querySelectorAll('.legal-tab-pane');
  allPanes.forEach(p => p.classList.remove('active'));

  const activePane = document.getElementById('legal-' + tabName);
  if (activePane) {
    activePane.classList.add('active');
  }
}

// Global Function: Clipboard Copy Utility
function copyValue(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.innerText;
    btn.innerText = 'copied';
    btn.style.color = '#ff6b00';
    btn.style.borderColor = '#ff6b00';
    setTimeout(() => {
      btn.innerText = orig;
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 1500);
  });
}
