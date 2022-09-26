export default function FocusBlur() {
  return (
    <div className="section"
      tabIndex={1}
      onFocus={(e) => {
        if (e.currentTarget === e.target) {
            console.log('focused self');
            console.log(e.currentTarget);
            console.log(e.target);
        } else {
            console.log('focused child', e.target);
            console.log(e.currentTarget);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
            console.log('focus entered self');
            console.log(e.relatedTarget);
        }
      }}
      onBlur={(e) => {
        if (e.currentTarget === e.target) {
          console.log('unfocused self');
        } else {
          console.log('unfocused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
            console.log('focus left self');
            console.log(e.relatedTarget);
        }
      }}
    >
      <input id="1" />
      <input id="2" />
    </div>
  );
}