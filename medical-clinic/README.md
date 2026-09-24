# Willowbrook Medical Clinic — Weburon sample

A responsive, static clinic website for showcasing to prospective clients. It includes service information, clinician profiles, hours, FAQs, contact links, an appointment request form, and a small demo owner dashboard.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## GitHub Pages

Push this folder to a GitHub repository. In **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save. `index.html` is the entry point. No build step or dependencies are needed.

## Demo limitations

All clinic details and clinician profiles are fictional. Form submissions are stored in the visitor's browser using `localStorage`; the owner dashboard at `owner.html` can only see requests made in that same browser. This is not secure patient storage, a real booking workflow, or an emergency contact channel. Before using this for a real clinic, replace the sample details, connect a secure appointment provider, add authentication, establish privacy and accessibility policies appropriate to the clinic's location, and have clinicians review service descriptions.

## Photography

The demo uses local photo files. See [PHOTOS.md](PHOTOS.md) for individual sources and licensing. Stock photos do not depict the fictional business or its staff.
