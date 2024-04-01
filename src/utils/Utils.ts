export const Utils = {
    convertHashTag(html: string) {
        return html.replace(/(?:^|\s)#([\w가-힣\\-]+)/gm, val => {
            const tagName = encodeURIComponent(`${val.trim().replace(/#/, '')}`);
            return `<a href="/hashtag/${tagName}">${val}</a>`;
        });
    },
};
