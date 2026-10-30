# Munna Yadav, Personal Portfolio

A modern, responsive portfolio website built with plain **HTML, CSS and JavaScript**.
No frameworks, no build tools, no paid services. It can be hosted free on **GitHub Pages**.

## What is inside

| File | What it does |
| --- | --- |
| `index.html` | The page content: all sections, text and links |
| `style.css` | Colors, fonts, spacing and responsive layout |
| `script.js` | Mobile menu, footer year, project/certificate links |
| `Munna_Yadav_Resume.pdf` | **You add this.** Your real resume (see Step 1) |
| `images/profile.jpg` | Your profile photo (already included). Replace it to change the photo |
| `images/` | Also the place for project screenshots (optional) |

## Run it on your computer

1. Download and unzip the project folder.
2. Double-click `index.html`. It opens in your browser.

Optional, with live refresh: install the **Live Server** extension in Visual Studio Code, right-click `index.html`, and choose **Open with Live Server**.

---

## Things you must do before sharing the site

### Step 1: Add your resume

1. Save your resume as a PDF.
2. Rename it to exactly: `Munna_Yadav_Resume.pdf`
   (capital M, capital Y, capital R, underscores, no spaces)
3. Put it in the **same folder as `index.html`**.

The "Resume" and "Download Resume" buttons will then download it. Until you add the file, those buttons will show a "file not found" error. This is expected.

> GitHub is case-sensitive. `munna_yadav_resume.pdf` will NOT work.

### Step 2: Add your project links

1. Upload each project to its own GitHub repository.
2. Open `script.js`.
3. Find the `LINKS` section near the top and paste your addresses between the quotes:

```js
var LINKS = {
  bankProject: "https://github.com/your-username/bank-management-system",
  healthProject: "https://github.com/your-username/health-management-system",
  pythonCertificate: "",
  hackathonCertificate: ""
};
```

While a value is empty, the button stays grey and says "coming soon". When you add a link, it becomes a working button automatically.

### Step 3: Add project screenshots (optional)

1. Use the `images` folder next to `index.html` (it already has `profile.jpg`).
2. Add your screenshots, for example `bank-management-system.png`.
3. In `index.html`, find the comment that says `SCREENSHOT` above each project and follow it. It shows the exact `<img>` line to paste in place of the placeholder box.

Tip: keep screenshots under about 300 KB so the site loads fast.

### Step 4: Fill in certificate details

In `index.html`, search for `To be added` and replace it with the real issuer and date. Only write what is printed on your certificate. Add a certificate link in `script.js` (`pythonCertificate`, `hackathonCertificate`) if you have an online one.

### Changing your profile photo

Save a new portrait-shaped photo (about 800 x 960 px, under 150 KB) as `images/profile.jpg`, replacing the old one. Keep the same file name and nothing in the code needs to change.

### Step 5: Edit text anytime

Open `index.html` in Visual Studio Code. Every section has a clear comment such as `<!-- ABOUT -->`. Change only the text between the tags. To change colors, edit the `:root` block at the top of `style.css`.

---

## Publish on GitHub Pages (free)

### 1. Create a GitHub account (skip if you have one)

1. Go to https://github.com and click **Sign up**.
2. Enter your email, a password and a username. Your username becomes part of your website address, so choose something professional.
3. Verify your email.

### 2. Create a repository

1. Click the **+** at the top right, then **New repository**.
2. Name it `portfolio` (or `munna-yadav-portfolio`).
   *Tip: naming it `YOUR-USERNAME.github.io` gives a shorter address with no repository name in it.*
3. Choose **Public**.
4. Click **Create repository**.

### 3. Upload the files

1. On the new repository page, click **uploading an existing file**.
2. Open your project folder and select **the files inside it** (not the folder itself): `index.html`, `style.css`, `script.js`, `README.md`, `Munna_Yadav_Resume.pdf`, and the **`images` folder** (it contains your profile photo, so the photo will not show without it).
3. Drag them into the browser window.
4. Wait for the upload to finish, then click **Commit changes**.

Check that `index.html` is visible in the main file list, not inside another folder.

### 4. Turn on GitHub Pages

1. In your repository, click **Settings**.
2. In the left menu, click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.

### 5. Find your website address

Wait 1 to 3 minutes and refresh the **Pages** settings page. A box appears saying **Your site is live at**:

```
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

Click **Visit site**. Copy this address into your LinkedIn profile, resume and emails.

### 6. Update the website later

- **Edit a file:** open it in the repository, click the pencil icon, make your change, then click **Commit changes**.
- **Replace a file** (for example a new resume): click **Add file**, then **Upload files**, and upload a file with the **same name**. Commit.
- Changes appear on the live site after 1 to 2 minutes. If you do not see them, hard-refresh with `Ctrl + Shift + R`.

---

## Optional: better link previews

After publishing, you can add these two lines inside `<head>` in `index.html` (replace the address) so WhatsApp and LinkedIn show a nicer preview. You will need a preview image of your own, for example 1200 x 630 pixels, saved at `images/preview.png`. (Do not use your profile photo path unless you want that photo as the preview.)

```html
<meta property="og:url" content="https://YOUR-USERNAME.github.io/REPOSITORY-NAME/">
<meta property="og:image" content="https://YOUR-USERNAME.github.io/REPOSITORY-NAME/images/preview.png">
```

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Site shows a 404 page | Wait a few minutes. Make sure `index.html` is at the top level of the repository and Pages is set to `main` and `/ (root)`. |
| No styling | Check that `style.css` is in the same place as `index.html` and spelled exactly. |
| Resume button gives an error | Check the file is named exactly `Munna_Yadav_Resume.pdf` and is next to `index.html`. |
| Project button still says "coming soon" | Check you pasted the full link inside the quotes in `script.js`, with no extra spaces. |

## About the content

Everything on this site comes from the details you provided. No statistics, testimonials, certifications, project features or deployment links have been invented. Add new facts only when they are true and you can show them.

## Contact form note

This site has no contact form on purpose. A form needs a backend or a service (such as Formspree) to deliver messages. The email and LinkedIn buttons work without any service.
