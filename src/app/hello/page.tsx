function Item({ text }: { text: string }) {
  return <div>{text}</div>;
}

export default function Home() {
  const items = new Array(100000);
  items.fill(0);
  return (
    <main>
      {items.map((item, index) => (
        <Item key={index} text={String(index)}></Item>
      ))}
    </main>
  );
}
