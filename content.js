(function () {
  'use strict';

  console.log('Ghost Inspector Helper: Loaded');

  document.addEventListener(
    'keydown',
    function (e) {
      const target = e.target;

      // Only work on input and textarea elements
      if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
        return;
      }

      // When { is pressed
      if (e.key === '{') {
        e.preventDefault();

        const start = target.selectionStart;
        const end = target.selectionEnd;
        const value = target.value;

        // Insert {{}} at cursor position
        const newValue =
          value.substring(0, start) + '{{}}' + value.substring(end);
        target.value = newValue;

        // Place cursor in the middle (between the braces)
        const cursorPosition = start + 2;
        target.setSelectionRange(cursorPosition, cursorPosition);

        // Trigger input event so frameworks detect the change
        target.dispatchEvent(new Event('input', { bubbles: true }));
      }
    },
    true
  );
})();
