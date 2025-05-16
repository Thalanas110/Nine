// Declare classes and interfaces
// Poem Interface
class Poem {
  constructor(id, title, author, text) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.text = text;
  }
}

// Data - 12 Winter Poems
const poems = [
  {
    id: 1,
    title: "Whispers of Winter",
    author: "Emilia Frost",
    text: "Silent snow descends at dusk,\nCovering earth in crystal hush.\nBreath suspends in frozen air,\nWhite blanket draped without a care.\n\nFootprints vanish, time stands still,\nAs darkness climbs the distant hill.\nIn winter's grasp, the world now sleeps,\nWhile memory of autumn weeps."
  },
  {
    id: 2,
    title: "Snow-Bound Heart",
    author: "Marcus Winter",
    text: "These frosted windows frame my days,\nAs winter's touch now longer stays.\nI watch the snowflakes dance and twirl,\nEach crystal perfect as they swirl.\n\nMy breath creates small clouds of white,\nThat dissipate from morning light.\nThe silence weighs like heavy snow,\nIn absence of your voice I know."
  },
  {
    id: 3,
    title: "December's Memory",
    author: "Olivia Reid",
    text: "Remember when we walked the path,\nOur footsteps marking virgin snow?\nThe midnight hour, the stars above,\nThe world in silence down below.\n\nYour hand in mine, our breath entwined,\nTwo shadows cast by silver moon.\nDecember's chill could not compare\nTo warmth that left my heart too soon."
  },
  {
    id: 4,
    title: "Frozen Bench",
    author: "Noah Blake",
    text: "The park bench waits in solitude,\nIts wooden slats with frost adorned.\nWhere once we sat in warmer days,\nNow empty space where hearts once warmed.\n\nI wonder if you think of me,\nWhen snowflakes touch your distant face.\nOr if I've melted from your mind,\nLike winter thaw leaves not a trace."
  },
  {
    id: 5,
    title: "Snowfall at Midnight",
    author: "Sophia Chen",
    text: "The world transforms at midnight's hour,\nWhen snowflakes drift from skies above.\nThe city sleeps beneath the spell,\nOf winter's pure and gentle love.\n\nEach crystal brings a memory down,\nOf moments frozen in the past.\nI catch them on my outstretched hand,\nKnowing nothing here can last."
  },
  {
    id: 6,
    title: "Quiet Streets",
    author: "Liam Winters",
    text: "The lampposts stand like sentinels,\nAlong the snow-packed empty street.\nTheir gentle glow on powdered white,\nMakes shadows dance around my feet.\n\nNo sound disrupts this perfect peace,\nNo footprints mar the pristine ground.\nThe city sleeps beneath the snow,\nIn winter's silence, dreams abound."
  },
  {
    id: 7,
    title: "Ice Crystals",
    author: "Eliza North",
    text: "Like memories etched on frosted glass,\nThese patterns speak of nature's art.\nEach crystal formed with perfect grace,\nReminds me of your gentle heart.\n\nI trace the lines with fingertips,\nAnd watch as warmth dissolves their form.\nJust as your touch once melted me,\nBefore the coming of the storm."
  },
  {
    id: 8,
    title: "Winter Silence",
    author: "Theo Morgan",
    text: "How softly falls the winter snow,\nEach flake a whisper from the sky.\nThe world now muted, hushed and still,\nAs clouds embrace the sun goodbye.\n\nIn silence deep as ancient seas,\nI walk alone through drifted white.\nMy thoughts the only company,\nIn this cathedral built of light."
  },
  {
    id: 9,
    title: "February Dawn",
    author: "Isabel Frost",
    text: "The morning breaks in shades of grey,\nAs winter holds its fading reign.\nThe promise of a distant spring,\nStill buried under snow and rain.\n\nI rise to meet another day,\nMy breath a cloud that quickly fades.\nThe sunrise paints the eastern sky,\nWith hopeful pinks and gentle shades."
  },
  {
    id: 10,
    title: "Snow Angels",
    author: "Mason Lee",
    text: "We fell like children to the ground,\nOur laughter rising to the stars.\nWith arms outstretched in frozen joy,\nWe left our marks, now yours and ours.\n\nTwo angels pressed in virgin snow,\nTheir wings spread wide as if in flight.\nA moment captured, soon to melt,\nWhen morning brings its warming light."
  },
  {
    id: 11,
    title: "Frost Patterns",
    author: "Amelia Wright",
    text: "The window bears your artistry,\nIntricate patterns etched in frost.\nEach crystal branch, each icy fern,\nSpeaks of the warmth that we have lost.\n\nI trace the patterns with my gaze,\nThese temporary works of art.\nBy noon they'll fade from warming sun,\nJust as you've faded from my heart."
  },
  {
    id: 12,
    title: "Winter's Promise",
    author: "James River",
    text: "The shortest day, the longest night,\nWinter solstice marks the turn.\nThough darkness seems to dominate,\nThe sun's return we soon discern.\n\nThis season teaches patience well,\nAs life retreats beneath the snow.\nIn dormant seeds and sleeping trees,\nSpring waits its time, though none yet know."
  }
];

// Utility Functions
function debounce(func, wait) {
  let timeout = null;
  
  return function(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
  };
}

// Component Classes
class PoemCard {
  constructor(poem) {
    this.poem = poem;
    this.element = this.render();
    this.setupEventListeners();
  }

  render() {
    const card = document.createElement('div');
    card.className = 'poem-card';
    card.setAttribute('data-title', this.poem.title);
    card.setAttribute('data-author', this.poem.author);

    const contentContainer = document.createElement('div');
    contentContainer.className = 'poem-card__content';

    // Create poem title
    const title = document.createElement('h2');
    title.className = 'poem-card__title';
    title.textContent = this.poem.title;

    // Create poem author
    const author = document.createElement('p');
    author.className = 'poem-card__author';
    author.textContent = `by ${this.poem.author}`;

    // Create poem text container
    const textContainer = document.createElement('div');
    textContainer.className = 'poem-card__text';
    
    // Format poem with line breaks
    textContainer.innerHTML = this.formatPoemText(this.poem.text);

    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'poem-card__toggle';
    toggleButton.innerHTML = `
      <span class="read-more-text">Read more <i class="fas fa-chevron-down"></i></span>
      <span class="read-less-text">Show less <i class="fas fa-chevron-up"></i></span>
    `;

    // Append elements to card
    contentContainer.appendChild(title);
    contentContainer.appendChild(author);
    contentContainer.appendChild(textContainer);
    contentContainer.appendChild(toggleButton);
    card.appendChild(contentContainer);

    return card;
  }

  formatPoemText(text) {
    // Split the poem by stanzas (double newlines)
    const stanzas = text.split('\n\n');
    
    // Format each stanza with line breaks
    return stanzas.map(stanza => {
      // Replace single newlines with <br> tags
      const formattedStanza = stanza.split('\n').join('<br>');
      return `<p>${formattedStanza}</p>`;
    }).join('');
  }

  setupEventListeners() {
    const toggleButton = this.element.querySelector('.poem-card__toggle');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        this.element.classList.toggle('expanded');
      });
    }
  }
}

class Header {
  constructor(props) {
    this.element = this.render(props);
  }

  render(props) {
    const header = document.createElement('header');
    header.className = 'header';

    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h1');
    title.className = 'header__title';
    title.textContent = props.title;

    const subtitle = document.createElement('p');
    subtitle.className = 'header__subtitle';
    subtitle.textContent = props.subtitle;

    container.appendChild(title);
    container.appendChild(subtitle);
    header.appendChild(container);

    return header;
  }
}

class ControlPanel {
  constructor(props) {
    this.element = this.render(props);
  }

  render(props) {
    const controlPanel = document.createElement('div');
    controlPanel.className = 'control-panel';

    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.id = 'search-input';
    searchInput.type = 'text';
    searchInput.placeholder = 'Search poems...';
    searchInput.addEventListener('input', (e) => {
      const target = e.target;
      props.onSearch(target.value.trim());
    });

    const searchIcon = document.createElement('i');
    searchIcon.className = 'fas fa-search search-icon';

    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchIcon);

    // Create controls container
    const controls = document.createElement('div');
    controls.className = 'controls';

    // Create sort container
    const sortContainer = document.createElement('div');
    sortContainer.className = 'sort-container';

    const sortSelect = document.createElement('select');
    sortSelect.className = 'sort-select';
    sortSelect.id = 'sort-select';
    sortSelect.addEventListener('change', (e) => {
      const target = e.target;
      props.onSort(target.value);
    });

    const sortOptions = [
      { value: 'default', text: 'Sort By' },
      { value: 'title-asc', text: 'Title (A-Z)' },
      { value: 'title-desc', text: 'Title (Z-A)' },
      { value: 'author-asc', text: 'Author (A-Z)' },
      { value: 'author-desc', text: 'Author (Z-A)' }
    ];

    sortOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      sortSelect.appendChild(optionElement);
    });

    const sortIcon = document.createElement('i');
    sortIcon.className = 'fas fa-chevron-down sort-icon';

    sortContainer.appendChild(sortSelect);
    sortContainer.appendChild(sortIcon);

    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.id = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.addEventListener('click', props.onToggleTheme);

    // Create theme icons
    const moonIcon = document.createElement('i');
    moonIcon.className = 'fas fa-moon';
    moonIcon.id = 'moon-icon';

    const sunIcon = document.createElement('i');
    sunIcon.className = 'fas fa-sun';
    sunIcon.id = 'sun-icon';
    sunIcon.style.display = 'none';

    themeToggle.appendChild(moonIcon);
    themeToggle.appendChild(sunIcon);

    // Append elements
    controls.appendChild(sortContainer);
    controls.appendChild(themeToggle);
    
    controlPanel.appendChild(searchContainer);
    controlPanel.appendChild(controls);

    return controlPanel;
  }
}

class Footer {
  constructor() {
    this.element = this.render();
  }

  render() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const container = document.createElement('div');
    container.className = 'container';

    const content = document.createElement('div');
    content.className = 'footer__content';

    // Create info section
    const info = document.createElement('div');
    info.className = 'footer__info';

    const title = document.createElement('h2');
    title.className = 'footer__title';
    title.textContent = 'Winter Verses';

    const subtitle = document.createElement('p');
    subtitle.className = 'footer__subtitle';
    subtitle.textContent = 'A collection of winter-inspired poetry';

    info.appendChild(title);
    info.appendChild(subtitle);

    // Create social links
    const socialLinks = document.createElement('div');
    socialLinks.className = 'footer__social';

    const socialIcons = [
      { icon: 'twitter', url: '#' },
      { icon: 'instagram', url: '#' },
      { icon: 'pinterest', url: '#' }
    ];

    socialIcons.forEach(social => {
      const link = document.createElement('a');
      link.href = social.url;
      link.className = 'footer__social-link';
      link.setAttribute('aria-label', social.icon);

      const icon = document.createElement('i');
      icon.className = `fab fa-${social.icon}`;

      link.appendChild(icon);
      socialLinks.appendChild(link);
    });

    // Create copyright section
    const copyright = document.createElement('div');
    copyright.className = 'footer__copyright';
    copyright.textContent = '© 2023 Winter Verses. All poems are original works.';

    // Append all sections
    content.appendChild(info);
    content.appendChild(socialLinks);

    container.appendChild(content);
    container.appendChild(copyright);
    footer.appendChild(container);

    return footer;
  }
}

class ScrollToTop {
  constructor() {
    this.element = this.render();
    this.setupEventListeners();
  }

  render() {
    const button = document.createElement('button');
    button.className = 'scroll-top';
    button.id = 'scroll-top';
    button.setAttribute('aria-label', 'Scroll to top');

    const icon = document.createElement('i');
    icon.className = 'fas fa-arrow-up';

    button.appendChild(icon);

    return button;
  }

  setupEventListeners() {
    this.element.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Services
class SearchService {
  constructor(poems) {
    this.poems = poems;
    this.filteredPoems = [...poems];
  }

  search(searchTerm) {
    if (!searchTerm) {
      this.filteredPoems = [...this.poems];
      return this.filteredPoems;
    }

    searchTerm = searchTerm.toLowerCase();
    
    this.filteredPoems = this.poems.filter(poem => 
      poem.title.toLowerCase().includes(searchTerm) ||
      poem.author.toLowerCase().includes(searchTerm) ||
      poem.text.toLowerCase().includes(searchTerm)
    );
    
    return this.filteredPoems;
  }

  sort(sortOption) {
    const poemsToSort = [...this.filteredPoems];
    
    switch (sortOption) {
      case 'title-asc':
        poemsToSort.sort((a, b) => a.title.localeCompare(b.title));
        break;
      
      case 'title-desc':
        poemsToSort.sort((a, b) => b.title.localeCompare(a.title));
        break;
      
      case 'author-asc':
        poemsToSort.sort((a, b) => a.author.localeCompare(b.author));
        break;
      
      case 'author-desc':
        poemsToSort.sort((a, b) => b.author.localeCompare(a.author));
        break;
      
      default:
        // Restore original order
        return this.filteredPoems = [...this.poems].filter(poem => 
          this.filteredPoems.some(p => p.id === poem.id)
        );
    }
    
    this.filteredPoems = poemsToSort;
    return this.filteredPoems;
  }
}

class ThemeService {
  constructor() {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.currentTheme = savedTheme;
    
    // Apply theme
    this.applyTheme();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
  }

  applyTheme() {
    // Set theme on document body
    document.body.setAttribute('data-theme', this.currentTheme);
    
    // Store theme in localStorage
    localStorage.setItem('theme', this.currentTheme);
    
    // Update theme toggle button icons
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    if (moonIcon && sunIcon) {
      if (this.currentTheme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
      } else {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
      }
    }
  }
}

// Main App
class App {
  constructor() {
    // Initialize root element
    this.rootElement = document.getElementById('root');
    this.rootElement.innerHTML = '';

    // Initialize services
    this.themeService = new ThemeService();
    this.searchService = new SearchService(poems);

    // Initialize app
    this.render();
    this.setupEventListeners();
  }

  render() {
    // Create main elements
    const main = document.createElement('main');
    main.className = 'container';
    main.style.paddingBottom = '4rem';

    // Add header
    const header = new Header({
      title: 'Winter Verses',
      subtitle: 'A collection of poetry inspired by winter\'s quiet moments and whispered thoughts'
    }).element;

    // Create control panel
    const controlPanel = new ControlPanel({
      onSearch: debounce(this.handleSearch.bind(this), 300),
      onSort: this.handleSort.bind(this),
      onToggleTheme: this.themeService.toggleTheme.bind(this.themeService)
    }).element;

    // Create loader
    this.loader = document.createElement('div');
    this.loader.className = 'loader';
    this.loader.innerHTML = '<div class="loader__spinner"></div>';

    // Create no results element
    this.noResults = document.createElement('div');
    this.noResults.className = 'no-results';
    this.noResults.innerHTML = `
      <div class="no-results__icon"><i class="fas fa-search"></i></div>
      <h3 class="no-results__title">No poems found</h3>
      <p class="no-results__message">Try adjusting your search term</p>
    `;

    // Create poem container
    this.poemContainer = document.createElement('div');
    this.poemContainer.className = 'poem-container';

    // Create poem cards
    this.poemCards = [];
    poems.forEach(poem => {
      const poemCard = new PoemCard(poem);
      this.poemCards.push(poemCard);
      this.poemContainer.appendChild(poemCard.element);
    });

    // Create scroll to top button
    const scrollToTop = new ScrollToTop().element;

    // Create footer
    const footer = new Footer().element;

    // Add everything to main
    main.appendChild(controlPanel);
    main.appendChild(this.loader);
    main.appendChild(this.noResults);
    main.appendChild(this.poemContainer);

    // Add everything to root
    this.rootElement.appendChild(header);
    this.rootElement.appendChild(main);
    this.rootElement.appendChild(scrollToTop);
    this.rootElement.appendChild(footer);
  }

  setupEventListeners() {
    // Check scroll position for scroll to top button
    window.addEventListener('scroll', debounce(() => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollToTopBtn = document.querySelector('.scroll-top');
      
      if (scrollY > windowHeight * 2) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }, 100));
  }

  handleSearch(searchTerm) {
    // Show loader and hide container
    this.loader.style.display = 'flex';
    this.poemContainer.style.opacity = '0.5';
    
    // Use setTimeout to simulate loading and prevent UI freeze
    setTimeout(() => {
      const results = this.searchService.search(searchTerm);
      this.updatePoemVisibility(results);
      
      // Hide loader and show container
      this.loader.style.display = 'none';
      this.poemContainer.style.opacity = '1';
      
      // Toggle no results message
      if (results.length === 0) {
        this.noResults.style.display = 'block';
      } else {
        this.noResults.style.display = 'none';
      }
    }, 300);
  }

  handleSort(sortOption) {
    // Show loader and hide container
    this.loader.style.display = 'flex';
    this.poemContainer.style.opacity = '0.5';
    
    // Use setTimeout to simulate loading and prevent UI freeze
    setTimeout(() => {
      const sortedPoems = this.searchService.sort(sortOption);
      
      // Reorder DOM elements based on sorted order
      sortedPoems.forEach(poem => {
        const poemCard = this.poemCards.find(card => card.poem.id === poem.id);
        if (poemCard) {
          this.poemContainer.appendChild(poemCard.element);
        }
      });
      
      // Hide loader and show container
      this.loader.style.display = 'none';
      this.poemContainer.style.opacity = '1';
    }, 300);
  }

  updatePoemVisibility(visiblePoems) {
    this.poemCards.forEach(card => {
      const isVisible = visiblePoems.some(poem => poem.id === card.poem.id);
      card.element.style.display = isVisible ? 'block' : 'none';
    });
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});