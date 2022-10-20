export function withSelectableTheme(Story, context) {
  function Cell(props) {
    return (
      <div
        {...props}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem 0 2rem",
        }}
      />
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
      <Cell data-color-scheme="light" data-contrast="less">
        <Story />
      </Cell>
      <Cell data-color-scheme="light" data-contrast="more">
        <Story />
      </Cell>
      <Cell data-color-scheme="dark" data-contrast="less">
        <Story />
      </Cell>
      <Cell data-color-scheme="dark" data-contrast="more">
        <Story />
      </Cell>
    </div>
  );
}
