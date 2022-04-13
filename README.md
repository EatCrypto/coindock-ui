# CRA 5 + typescript + styled-components + twin.macro

This is a boilerplate project that uses modern CRA typescript template with styled-components and twin.macro library.

## Automatic Install

```
git clone https://github.com/mingcrypto/cra-ts-twin.macro-boilerplate.git
cd cra-ts-twin.macro-boilerplate
npm install
npm start

```

## Manual Install

```
npx create-react-app my-app --template typescript
cd my-app
npm install twin.macro@2.8.1 tailwindcss styled-components@5.2.1
npm install @types/styled-components -D
```

And add babel macros config in package.json file.

```
"babelMacros": {
  "twin": {
    "preset": "styled-components"
  }
}
```

That's it! 🎉

## Bonus

I've added one of the best eslint rules configuration with prettier, husky and commitlint.

Also for VSCode users, there's VSCode settings.json file for twin.macro intelligence and prettier rules.

## Any issues?

If you have any issues or questions, feel free to create github issue here - https://github.com/mingcrypto/cra-ts-twin.macro-boilerplate/issues

Thank you!
