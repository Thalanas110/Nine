# Main Descriptor
| **Description**      | **Adriaan M. Dimate**       | **Mary Chan P. Soberano**         |
|----------------------|-----------------------------|-----------------------------------|
| **Full Name**        | Adriaan M. Dimate           | Mary Chan P. Soberano             |
| **Religion**         | Born Again Christian        | Born Again Christian              |
| **Age**              | 20                          | 18                                |
| **Birthdate**        | September 26, 2004          | September 17, 2006                |
| **Program Enrolled** | BS Computer Science         | BSEd-English                      |
| **Year Level**       | 2nd year                    | 1st year                          |
| **City Address**     | Olongapo City, Zambales     | La Carlota, Negros Occidental     |



# ❤️ Love Poems Collection

A curated collection of original love poems, beautifully presented under a static site hosted at [siafracerice.netlify.app](https://siafracerice.netlify.app).

---

## 🌟 Features

- Handcrafted poems spanning joy, longing, devotion, and bittersweet love.
- Beautiful typographical styling with minimal static site.
- Fully responsive design—enjoy poems seamlessly across devices.
- Deployed automatically through Netlify on each commit to the `main` branch.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v12+)
- [Git](https://git-scm.com/)

### Installation
```bash
git clone https://github.com/Thalanas110/Nine.git
cd Nine         # or your project folder
````

### Development

```bash
# Install dependencies (if any framework/tooling used)
npm install

# Run a local dev server
npm run dev
```

Your site will be available at `http://localhost:3000` (or whichever port config you use).

### Build & Deploy

```bash
npm run build
```

Deploy the contents of the `dist/` or `public/` folder to any static host—already set up to auto-deploy on Netlify via GitHub.

---

## 📁 Project Structure

```text
.
├── public/ or dist/    # Compiled static site (replace with actual dir)
├── src/                # Source files (HTML templates, CSS, poems content)
├── poems/              # Markdown or JSON files for each poem
├── netlify.toml        # Netlify deployment settings
├── package.json        # Scripts & dependencies
└── README.md           # This file
```

---

## ✍️ Adding a New Poem

1. Create a new `.md` or `.json` file under `poems/`.
2. Use the existing format: give it a title, author (if any), and content.
3. Save, commit, and push to the `main` branch.
4. Netlify will rebuild and deploy automatically—you’ll see the new poem live within seconds.

---

## 🤝 Contributing

To contribute:

1. Fork the repository.
2. Create your branch: `git checkout -b my-poem`
3. Add your poem in `poems/`
4. Commit: `git commit -m "Add love poem titled '...'"`.
5. Push: `git push origin my-poem`
6. Open a Pull Request—poems will be reviewed for tone and formatting.

Please follow the content style: uplifting and heartfelt love poetry.

---

## 🪄 Deployment & Preview

* **Live Demo**: [siafracerice.netlify.app](https://siafracerice.netlify.app)
* **Deploys**: Automatic via GitHub → Netlify.
* **Preview Environment**: Every pull request (PR) triggers a Netlify Deploy Preview for easy review.

---

## 📜 License

Licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

> Poetry is the spontaneous overflow of powerful feelings.— *William Wordsworth*

---

## 🚀 Star This Project!

If you enjoy the poems or find inspiration here, please ⭐ star the repo.

```

---

### ✅ Next Steps

- Replace the directory names (`src`, `poems`, `public`/`dist`) with your actual project structure.
- Add any build steps (e.g., `hugo`, `jekyll`, `astro`) if you're using them.
- Confirm your Netlify settings—especially `netlify.toml`, build command, and publish directory.
- Feel free to add screenshots or a GIF in the README under the “Features” or “Usage” section.

