function Card({ props }: { props: { title: string; body: string } }) {
  return (
    <div style={{ padding: 16, border: "1px solid #e5e7eb", borderRadius: 8 }}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}

export default Card