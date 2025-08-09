// Selected Works: define each image once, variants are generated automatically

// Base list of image URLs (edit these only)
const selectedWorksSrcs = [
    'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754762496/DSC00572-3_o9xex1.jpg',
    'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754762809/IMG_6046_tbv3ii.jpg',
    'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754762734/DSCF1543-2_rcgt21.jpg',
    'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754762951/IMG_4650_nxf1d5.jpg',
    'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754763005/IMG_4426_sq4hm5.jpg',
    'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754763079/DSC07459_qvfrit.jpg',
    'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754763098/DSC07041_qupluj.jpg',
    'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754762623/DSCF1451-Enhanced-NR_gxdpwa.jpg',
    'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754763178/IMG_3214_2_kdun2e.jpg'

];

// Helper: build a URL with desired params while preserving existing ones
function buildImageUrl(base, { width, quality }) {
    try {
        const url = new URL(base);
        // Preserve existing params, set/override these for optimization
        url.searchParams.set('auto', 'format');
        if (width) url.searchParams.set('w', String(width));
        if (quality) url.searchParams.set('q', String(quality));
        return url.toString();
    } catch (e) {
        // Fallback if base is already a full URL with params
        const sep = base.includes('?') ? '&' : '?';
        const w = width ? `w=${width}` : '';
        const q = quality ? `&q=${quality}` : '';
        return `${base}${sep}auto=format${w ? `&${w}` : ''}${q}`;
    }
}

function makeThumb(src) {
    return buildImageUrl(src, { width: 400, quality: 60 });
}

function makeFull(src) {
    return buildImageUrl(src, { width: 1600, quality: 85 });
}

function makeSrcSet(src) {
    const widths = [200, 400, 800];
    return widths
        .map((w) => `${buildImageUrl(src, { width: w, quality: 60 })} ${w}w`)
        .join(', ');
}

const sizes = '(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw';

const selectedWorks = selectedWorksSrcs.map((src, i) => ({
    thumb: makeThumb(src),
    thumbSrcSet: makeSrcSet(src),
    sizes,
    full: makeFull(src),
    alt: `work${i + 1}`,
}));

export default selectedWorks;
