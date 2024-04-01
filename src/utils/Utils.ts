import { TAG_REGEX } from '@/constants';

export const Utils = {
    convertHashTag(html: string) {
        return html.replace(TAG_REGEX, val => {
            const tagName = encodeURIComponent(`${val.trim().replace(/#/, '')}`);
            return `<a href="/hashtag/${tagName}">${val}</a>`;
        });
    },
};
