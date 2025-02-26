export async function load({ fetch }) {
    const response = await fetch('/notes/we-love-web/files.json');
    const files = await response.json();

    const markdownFiles = await Promise.all(
        files.map(async (file) => {
            const res = await fetch(`/notes/we-love-web/${file}`);
            const content = await res.text();
            return { filename: file, content };
        })
    );
    
    return { markdownFiles };
}
