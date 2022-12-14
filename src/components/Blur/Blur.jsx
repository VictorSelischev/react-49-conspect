export default function Blur() {
  return (
    <div className="section">
      <input
        onBlur={e => {
          console.log('Triggered because this input lost focus');
        }}
        placeholder="onBlur is triggered when you click this input and then you click outside of it."
      />
    </div>
  );
}
