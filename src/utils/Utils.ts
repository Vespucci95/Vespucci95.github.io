export const Utils = {
    convertHashTag(html: string) {
        return html.replace(/#[A-Za-z0-9가-힣]+/gm, val => {
            const tagName = encodeURIComponent(`${val.replace(/#/, '')}`);
            return `<a href="/hashtag/${tagName}">${val}</a>`;
        });
    },
};
