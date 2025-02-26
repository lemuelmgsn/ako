<script>
    import MarkdownIt from "markdown-it";

    export let data 

    let contents = "";

    const md = new MarkdownIt();

    contents = data.markdownFiles.map(file => ({
        filename: file.filename,
        content: md.render(file.content)
    }));
</script>

<section>
    {#each contents as file }
        <div class="markdown-content">
            {@html file.content}
        </div>
    {/each}
</section>