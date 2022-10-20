import "../src/themes.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// TODO: Add global types for color scheme and contrast
// export const globalTypes = {
//   scheme: {
//     name: "Scheme",
//     description: "Select light or dark theme",
//     defaultValue: "light",
//     toolbar: {
//       icon: "mirror",
//       items: ["light", "dark", "both"],
//       showName: true,
//       dynamicTitle: true,
//     },
//   },
//   contrast: {
//     name: "Contrast",
//     description: "Select less or more contrast",
//     defaultValue: "less",
//     toolbar: {
//       icon: "contrast",
//       items: ["less", "more", "both"],
//       showName: true,
//       dynamicTitle: true,
//     },
//   },
// };

// TODO: Add decorator to display various types
// export const decorators = [withSelectableTheme];

// function withSelectableTheme(Story, context) {
//   let { scheme, contrast } = context.globals;

//   function Flex(props) {
//     return (
//       <div
//         {...props}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           padding: "2rem 0 2rem",
//         }}
//       />
//     );
//   }

//   if (scheme === "both" && contrast === "both") {
//     return (
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gridTemplateRows: "1fr 1fr",
//         }}
//       >
//         <Flex data-color-scheme="light" data-contrast="less">
//           <Story />
//         </Flex>
//         <Flex data-color-scheme="light" data-contrast="more">
//           <Story />
//         </Flex>
//         <Flex data-color-scheme="dark" data-contrast="less">
//           <Story />
//         </Flex>
//         <Flex data-color-scheme="dark" data-contrast="more">
//           <Story />
//         </Flex>
//       </div>
//     );
//   }

//   if (scheme === "light" && contrast === "both") {
//     return (
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//         <Flex data-color-scheme="light" data-contrast="less">
//           <Story />
//         </Flex>
//         <Flex data-color-scheme="light" data-contrast="more">
//           <Story />
//         </Flex>
//       </div>
//     );
//   }

//   if (scheme === "dark" && contrast === "both") {
//     return (
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//         <Flex data-color-scheme="dark" data-contrast="less">
//           <Story />
//         </Flex>
//         <Flex data-color-scheme="dark" data-contrast="more">
//           <Story />
//         </Flex>
//       </div>
//     );
//   }

//   if (scheme === "both" && contrast === "less") {
//     return (
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//         <Flex data-color-scheme="light" data-contrast="less">
//           <Story />
//         </Flex>
//         <Flex data-color-scheme="dark" data-contrast="less">
//           <Story />
//         </Flex>
//       </div>
//     );
//   }

//   if (scheme === "both" && contrast === "more") {
//     return (
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//         <Flex data-color-scheme="light" data-contrast="more">
//           <Story />
//         </Flex>
//         <Flex data-color-scheme="dark" data-contrast="more">
//           <Story />
//         </Flex>
//       </div>
//     );
//   }

//   if (scheme === "light" && contrast === "less") {
//     return (
//       <Flex data-color-scheme="light" data-contrast="less">
//         <Story />
//       </Flex>
//     );
//   }

//   if (scheme === "light" && contrast === "more") {
//     return (
//       <Flex data-color-scheme="light" data-contrast="more">
//         <Story />
//       </Flex>
//     );
//   }

//   if (scheme === "dark" && contrast === "less") {
//     return (
//       <Flex data-color-scheme="dark" data-contrast="less">
//         <Story />
//       </Flex>
//     );
//   }

//   if (scheme === "dark" && contrast === "more") {
//     return (
//       <Flex data-color-scheme="dark" data-contrast="more">
//         <Story />
//       </Flex>
//     );
//   }

//   if (scheme === "both" && contrast === "") {
//     return (
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//         <Flex data-color-scheme="light" data-contrast="more">
//           <Story />
//         </Flex>
//         <Flex data-color-scheme="light" data-contrast="more">
//           <Story />
//         </Flex>
//       </div>
//     );
//   }

//   return <Story />;
// }
