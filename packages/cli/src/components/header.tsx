
export function Header() {
  return (
    <box justifyContent="center" alignItems="center">
      <box flexDirection="row" justifyContent="center" gap={0.5}>
        <ascii-font font="tiny" text="Night" color= "gray" />
        <ascii-font font="tiny" text="Code"/>
      </box>
    </box>
  );
}