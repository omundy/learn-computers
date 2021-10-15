


## Coming Soon




### Project Workflows

- MIT [Product Engineering Process](https://web.mit.edu/2.009/www/project/projectWorkflow.html)
- [More on google](https://www.google.com/search?q=developer%20workflows&tbm=isch&safe=off&tbs=rimg:CVkeOa3aHmx9YXKocheSM3kv&bih=1066&biw=1920&rlz=1C5CHFA_enUS903US909&hl=en&sa=X&ved=0CAIQrnZqFwoTCJiNgrqMpvACFQAAAAAdAAAAABAW#imgrc=yRI8meETsK-lNM)





### Data Issues

Margin of Error
- activity in data culture, hope can present



### APIs

Contact someone running that API and tell them your trouble. “You can’t make requests to it from a web frontend.” Send them your live project and see what they say. They might say you need to hit it from a server, which is fine, I can show you how.
In the meantime, so you can keep working, save a copy of the results (just go to the link you are providing fetch) as a .json file and call it locally. This will allow you to build the rest of your project while we figure out the API prob







## Github Markdown

GitHub doesn't permit you to adjust font sizes, styles, or colors when it renders Markdown. That's because the text needs to be legible on all sorts of systems with all sorts of font sizes and in both light and dark mode.

- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [What HTML Tags Does Github Allow?](https://gist.github.com/coolaj86/89821fe046623d5503ce5c4133e70506)
- [HTML Tags You Can Use on GitHub](https://gist.github.com/seanh/13a93686bf4c2cb16e658b3cf96807f2)
- [Github sanitization_filter](https://github.com/gjtorikian/html-pipeline/blob/main/lib/html/pipeline/sanitization_filter.rb#L44-L106)

### Not supported
- CSS via the `<style>` or `style=` attribute
- `class`











Lots of [options](https://gist.github.com/johnloy/27dd124ad40e210e91c70dd1c24ac8c8)



## Remark

Repo https://github.com/gnab/remark
An example https://remarkjs.com/

markdown + [remark](https://github.com/gnab/remark) + [markdown-to-slides](https://github.com/partageit/markdown-to-slides)

Run tool in watch mode to convert `.md` file
```bash
markdown-to-slides topics/data-basics.md -o slideshow.html -w
```

### But...

[Does not have two columns built-in](https://github.com/gnab/remark/wiki/Markdown#content-classes)
Some options:
https://github.com/gnab/remark/wiki/HTML-CSS-JS-samples



Like [liminal](https://github.com/jonathanlilly/liminal)
examples
- http://jmlilly.net/course.html
- http://www.jmlilly.net/talks/liminal/index.html


Or story
https://github.com/xaprb/story/
https://story.xaprb.com/slides/adirondack/#1







## Marp

https://marp.app/
https://github.com/marp-team/marpit

How to write markdown for marp https://marpit.marp.app/markdown
Uses CommonMark spec https://spec.commonmark.org/



### CLI tools
https://github.com/marp-team/marp-cli

Run tool in watch mode to convert `.md` file to `topics/data-basics.html`
```bash
marp topics/data-basics.md -w --html true
```

Or, add config to package.json and run just
```
marp -w
```


### Options in Package.json
https://github.com/marp-team/marp-cli#options

- html - Enable HTML tags
- inputDir - where markdown files
- output - dir to send output
- headingDivider - https://marpit-api.marp.app/marpit


Styling
https://marpit.marp.app/directives?id=styling-slide



Default Theme
https://github.com/bespokejs/bespoke
Change themes
https://github.com/marp-team/marp-core/tree/main/themes#gaia



https://github.com/marp-team/marp-cli/blob/d539831620cdcf3ba1ea04479b2ec643abc0d758/src/templates/bespoke/navigation.ts#L17-L41
↓ / → / Space / PageDown: Navigate to next slide (or fragment)
↑ / ← / Shift + Space / PageUp: Navigate to previous slide (or fragment)
Home: Navigate to the first slide
End: Navigate to the last slide
f: Toggle fullscreen
p: Open presenter view
