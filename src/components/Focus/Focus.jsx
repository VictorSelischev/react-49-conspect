export default function Focus() {
  return (
    <div className="section">
      <input
        onFocus={e => {
          console.log('Focused on input');
          console.log(e);
        }}
        placeholder="onFocus is triggered when you click this input."
      />
    </div>
  );
}
