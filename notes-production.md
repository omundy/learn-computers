

# Production Notes

Notes about how to publish / maintain the content of this repo.

---

## Project goals

Why I built this content using Markdown files in a Git repository:

- **Flexibility** – I can create content and automatically publish it to slide presentation *and* HTML tutorials.
- **Efficiency** – Markdown is very easy to write but I can use HTML/CSS even JS when needed.
- **The right tool** – Code samples can be placed directly within files, making it easy to search, copy/paste, edit.
- **Encapsulation** - All content (tutorials, sample code, exercises, diagrams, and other media) are encapsulated within a single repository, making it easy to move, manage, and publish on github.io for classes.
- **Accessibility** - As a Git repository, content is also easy for me to edit and not locked in propriety formats
- **Searchability** – I can search all plain text content, even replace text across the entire project.


---

## Logistics

- Each Markdown page inside /topics is essentially a topic within theme of the project
- Markdown pages are auto-published as slide presentations using Grunt and Marp
- The entire project is published online using GitHub Pages

To start the project

```bash
# install dependencies
npm install
# start grunt
grunt watch
```




---

## Potential platforms

- [Gitbook](https://www.gitbook.com/) would be a great option. Examples: [docs.yarnspinner.dev](https://docs.yarnspinner.dev/). If I had found this earlier I might have used it instead of doing it all from scratch.
- I explored Wikimedia as well, but I have never liked how content is (not) organized inside Wikis




---

## Writing Github Markdown

- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/) allows some HTML but [doesn't support](https://github.com/gjtorikian/html-pipeline/blob/main/lib/html/pipeline/sanitization_filter.rb#L44-L106)) `class`, `<style>` or `style=` attributes.
- Essentially, Github [wants](https://gist.github.com/seanh/13a93686bf4c2cb16e658b3cf96807f2) content [to be](https://gist.github.com/coolaj86/89821fe046623d5503ce5c4133e70506) legible on all sorts of systems, including both light and dark mode, so adjusting font sizes, styles, or colors is not allowed.



---

## Converting Markdown to HTML Slides

A list of potential [options](https://gist.github.com/johnloy/27dd124ad40e210e91c70dd1c24ac8c8) and experiments:



---

### Remark

- [Remark is a markdown-driven slideshow tool](https://github.com/gnab/remark), [website](https://remarkjs.com/)
- [markdown-to-slides converter, using remark](https://github.com/partageit/markdown-to-slides)

```bash
# Run tool in watch mode to convert `.md` file
markdown-to-slides topics/data-basics.md -o slideshow.html -w
```

- [Does not have two columns built-in](https://github.com/gnab/remark/wiki/Markdown#content-classes)
- Potentially [options in other remark themes](https://github.com/gnab/remark/wiki/HTML-CSS-JS-samples)
    - [Liminal theme for scientific presentations using Remark.js](https://github.com/jonathanlilly/liminal). [example](http://www.jmlilly.net/talks/liminal/index.html), [full example list](http://jmlilly.net/course.html)
    - [Story theme](https://github.com/xaprb/story/), [example](https://story.xaprb.com/slides/adirondack/#1)
- Ultimately I chose Marp because it gave me better options



---

### Marp

- [Marp](https://marp.app/) uses [marp-core](https://github.com/marp-team/marp-core) and [marpit](https://github.com/marp-team/marpit) to create HTML slides
- Simple markdown requirements using [CommonMark spec](https://spec.commonmark.org/): [How to write markdown for marp](https://marpit.marp.app/markdown)
- Documentation is pretty, and also pretty messy

### Marp CLI tools

Using [marp CLI tools](https://github.com/marp-team/marp-cli)

```bash
# Run tool in watch mode to convert `.md` file to `topics/data-basics.html`
marp topics/data-basics.md -w --html true

# Or, add config to package.json and run just
marp -w

# Currently calling it using grunt-shell (see below)
marp
```


---

### Marp Options

From [documentation](https://github.com/marp-team/marp-cli#options) for adding to package.json

- `html` Enable/disable HTML tags
- `inputDir` The base directory to find markdown and theme CSS (really only for finding other css files)
- `output` Output file path (or directory when input-dir is passed) (requires inputDir!)
- `headingDivider` Create a new slide at heading size ([marpit](https://marpit-api.marp.app/marpit))
- [Slide styling](https://marpit.marp.app/directives?id=styling-slide)
- Themes [default](https://github.com/bespokejs/bespoke) but you can [change themes](https://github.com/marp-team/marp-core/tree/main/themes#gaia)

Description | [Commands]((https://github.com/marp-team/marp-cli/blob/d539831620cdcf3ba1ea04479b2ec643abc0d758/src/templates/bespoke/navigation.ts#L17-L41)) (use any)
--- | ---
Next slide / fragment | <kbd>↓</kbd> <kbd>→</kbd> <kbd>Space</kbd> <kbd>PageDown</kbd>
Previous slide / fragment | <kbd>↑</kbd> <kbd>←</kbd> <kbd>Shift</kbd>+<kbd>Space</kbd> <kbd>PageUp</kbd>
First slide / Last slide | <kbd>Home</kbd> / <kbd>End</kbd>
Toggle fullscreen | <kbd>f</kbd>
Open presenter view | <kbd>p</kbd>


Look inside for help with Marp
https://github.com/marp-team/marp/discussions



### More articles

https://github.com/hahnec/marp-recipes
https://www.hashbangcode.com/article/creating-presentations-markdown-marp
https://towardsdatascience.com/bye-bye-powerpoint-hello-marp-3c0e3b3198b1
https://davidgarcia.dev/posts/creating-professional-slides-from-markdown-notes/
https://www.ansiblejunky.com/blog/custom-themes-with-marp/



---

## Convert Markdown to HTML

So many [options](https://stackoverflow.com/questions/7694887/is-there-a-command-line-utility-for-rendering-github-flavored-markdown)



---

### markdown-to-html-cli

- [markdown-to-html-cli](https://www.npmjs.com/package/markdown-to-html-cli) is a command line tool generates markdown as html.
- First tool that I tried. Worked OK, but kept looking...



---

### Pandoc

- [Pandoc](https://pandoc.org) feels more popular but also clunky. [Installation](https://pandoc.org/installing.html), [manual](https://pandoc.org/MANUAL.html)
- [Converting Multiple Markdown Files into HTML or Other Formats in Linux](https://websetnet.net/converting-multiple-markdown-files-into-html-or-other-formats-in-linux/)
- Some nice templates [ryangrose/easy-pandoc-templates](https://github.com/ryangrose/easy-pandoc-templates)

```bash
# convert a single file using a template
pandoc -s README.md -o test.html --template=assets/pandoc/easy-pandoc-templates/html/bootstrap_menu.html
```

```bash
# convert all .md files with template in a directory, saving to ...www/
cd topics
for i in *.md ; do echo "$i" && pandoc -s $i -o ../www/${i%.*}.html --template=../assets/pandoc/easy-pandoc-templates/html/bootstrap_menu.html ; done
```



---

### Grunt

- Issues automating Pandoc so switched to [bylexus/grunt-md2html](https://github.com/bylexus/grunt-md2html) to convert Markdown files to HTML
- Grunt "task runner" is popular and has excellent documentation:
	- [Getting started](https://gruntjs.com/getting-started)
    - [Watching Project Files for Changes with Grunt](https://mijingo.com/blog/watching-your-grunt-files-for-changes)
    - **Grunt task** something Grunt does. Make your own with `grunt.registerTask()`
    - **Grunt plugin** a convention for creating reusable tasks. If its on NPM it is a plugin.
- Automate just about anything, especially with plugins:
    - Watch any file or pattern with [grunt-watch](https://github.com/gruntjs/grunt-contrib-watch)
    - Plugin to [validate files with jshint](https://www.npmjs.com/package/grunt-contrib-jshint). See: [Setting up JSHint with Grunt](https://www.codereadability.com/jshint-with-grunt/)
    - Plugin to [Run Shell Command Through Grunt Task](https://www.c-sharpcorner.com/blogs/run-shell-command-through-grunt-task-grunt-shell)


### Grunt setup

1. Install the Grunt command line interface (CLI) globally
```bash
npm install -g grunt-cli
```

2. Install plugins in the project with `--save-dev` so it only runs locally
```bash
npm install grunt-md2html --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-shell --save-dev
```

3. Create a [gruntfile](https://gruntjs.com/sample-gruntfile) for plugin / watch options





### Basic Grunt usage

- Run grunt in the project directory `grunt watch`
- For debugging, run with `grunt watch --verbose`


### Grunt notes

- `grunt.task.registerTask` is the [same](https://gruntjs.com/api/grunt.task#grunt.task.registertask) as `grunt.registerTask`
- Thus, `grunt.task.loadNpmTasks` is also the [same](https://gruntjs.com/api/grunt.task#grunt.task.loadnpmtasks) as `grunt.loadNpmTasks`
- Grunt can validate its own Gruntfile using [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)







---

### Highlight.js

HTML code formatting by https://highlightjs.org/

- Styles [demo](https://highlightjs.org/static/demo/), [directory](https://github.com/highlightjs/highlight.js/tree/main/src/styles)
