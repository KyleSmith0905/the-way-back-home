![](/media/banner-image.png)

---

# The Way Back Home
The Way Back Home is an interactive component that guides your users on how to install your website as a PWA. This could allow you to have an installation button on your homepage.

## Usage
Feel free to checkout the [examples](/examples), or open an [issue](https://github.com/KyleSmith0905/the-way-back-home/issues) for support.

- Insert the The Way Back Home component inside of your component library's modal component.

### Vanilla
Load the component by importing it
```html
<script type="module">
  import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/the-way-back-home-core/loader/index.es2017.js';
  defineCustomElements();
</script>
```
Add the component 
```html
<the-way-back-home></the-way-back-home>
```

### React
Load the component by importing it
```jsx
// index.tsx
import { TheWayBackHomeCore, defineCustomElements } from 'the-way-back-home-react'

defineCustomElements();
```
Add the component
```jsx
// index.tsx
<TheWayBackHome/>
```

### Angular
Load the component by adding The Way Back Home module to the app module imports.
```ts
// app.module.ts
import { TheWayBackHomeModule } from "the-way-back-home-angular";

@NgModule({
  ...
  imports: [..., TheWayBackHomeModule],
  ...
})
export class AppModule { }
```
Add the component
```html
<!-- app.component.html -->
<the-way-back-home/>
```

### Vue
Load the component by adding The Way Back Home module to the app module imports.
```ts
// main.ts
import { TheWayBackHomeLibrary } from 'the-way-back-home-vue';

...
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('the-way-back-home');
app.use(TheWayBackHomeLibrary);
...
```

```vue
<!-- App.vue -->
<the-way-back-home/>
```

## Configuration

// TODO Change the configuration options
**active** `boolean` - Whether to activate the Estimtest prompt. Having this as false still imports the library but does not use it. Look at the [examples](examples) for sloppy implementations of fully removing Estimtest in production.

**experiments** `{
  name: string,
  description: string,
  fontSize?: number,
  colorBlind?: ColorBlind,
  keyboardOnly?: boolean
}[]` - The experiments to be performed on the app. This is set by default to perform multiple standard tests of common accessibility problems. This field accepts an array of objects each with the properties:
- `name` A quick ~15 letters title summarizing the test.
- `description` A description explaining the test and why it's important. Supports Markdown (Commonmark-compliant).
- `fontSize` The font size to set the page. Many users have difficulty reading text at the default font size, users fix this by increasing the default font size.
- `colorBlind` A change of colors on the page reflecting what colorblind users may see.
- `keyboardOnly` Many users may use keyboard navigation for a variety of reasons such as: Motor impairment, saving time, and more.

**moveSelector** `string` - An element selector containing the parent of where the element should be at. You could use this property in the event that your code does not permit you to place the element there.

## Contributing
If you have suggestions, feedback, issues, or bugs, please open an issue.

If are willing to contribute to The Way Back Home, please open a pull request.