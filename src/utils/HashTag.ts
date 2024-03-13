export class HashTag {
    regex = /#[A-Za-z0-9가-힣]+/gm;
    create(html: string) {
        return html.replace(this.regex, val => {
            const tagName = encodeURIComponent(`${val.replace(/#/, '')}`);
            return `<a href="/hashtag/${tagName}">${val}</a>`;
        });
    }
}
