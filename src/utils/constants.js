
const KeyCode = {
  ENTER: 'Enter',
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

export const clickEsc = (evt) => {
  return evt.key === (KeyCode.ESCAPE || KeyCode.ESC);
};

export const clickEnter = (evt) => {
  return evt.key === (KeyCode.ENTER);
};

export const FIRST_FOTO = 1;
export const LAST_FOTO = 3;

export const STARS = [5,4,3,2,1];

export const MIN_STARS_FOR_RECOMENDATION = 4;
