// Centralized project image sources; define each image once per project.
// Variants (thumb/srcset/full) are generated automatically like Selected Works.

// Helper builders (query-param based for Unsplash/PhotoVogue)
function buildImageUrl(base, { width, quality }) {
    const cleanBase = base.split('?')[0];
    try {
        const url = new URL(cleanBase);
        url.searchParams.set('auto', 'format');
        if (width) url.searchParams.set('w', String(width));
        if (quality) url.searchParams.set('q', String(quality));
        return url.toString();
    } catch {
        const sep = cleanBase.includes('?') ? '&' : '?';
        const w = width ? `w=${width}` : '';
        const q = quality ? `&q=${quality}` : '';
        return `${cleanBase}${sep}auto=format${w ? `&${w}` : ''}${q}`;
    }
}
const makeThumb = (src) => buildImageUrl(src, { width: 600, quality: 70 });
const makeFull = (src) => buildImageUrl(src, { width: 1800, quality: 85 });
const makeSrcSet = (src) => [300, 600, 1000]
    .map((w) => `${buildImageUrl(src, { width: w, quality: 70 })} ${w}w`).join(', ');
const sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';

// Define base sources per project (edit these only)
const projectSources = {
    vogue: {
        title: 'Vogue',
        sources: [
            'https://images.vogue.it/Photovogue/277be7a0-1938-11f0-8b68-e727f1c30dc4_gallery.jpg',
            'https://images.vogue.it/Photovogue/d70af2c0-1937-11f0-9d51-e57de264298b_gallery.jpg',
            'https://images.vogue.it/Photovogue/3ae0fa00-0e3a-11f0-b9f0-0b888f34ccb3_gallery.jpg',
        ],
    },
    solitude: {
        title: 'Solitude',
        sources: [
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754763178/IMG_3214_2_kdun2e.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754865215/DSCF1242_cct8lo.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754875195/DSC00330_5_mwx6hk.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754875261/Snapseed_30_2_qn7aog.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754875135/IMG_0912_mkr8rw.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754762496/DSC00572-3_o9xex1.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754762672/IMG_1386_sqo7ba.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754875324/DSC02165_2_y1df5s.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754875442/DSC00682_2_l4nxoq.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754875494/DSC00272_w0urtd.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754875670/DSC00372_3_ve1v3z.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754875706/DSC00312_3_mbvmrb.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754875841/DSC00123_3_bjwnqo.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754876040/DSCF3544_x69buj.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754876404/IMG_1515_2_jjnocr.jpg',
            'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754762817/IMG_6045_eyxobj.jpg',

        ],
    },
};

export function getProject(slug) {
    const proj = projectSources[slug];
    if (!proj) return null;
    const images = proj.sources.map((src) => ({
        thumb: makeThumb(src),
        thumbSrcSet: makeSrcSet(src),
        sizes,
        full: makeFull(src),
    }));
    return { title: proj.title, images };
}

// Optional: export an index for listing pages later
export function getProjectsIndex() {
    return Object.entries(projectSources).map(([slug, { title, sources }]) => ({
        slug,
        title,
        cover: makeThumb(sources[0]),
        description: undefined,
    }));
}
