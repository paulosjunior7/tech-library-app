 export const sortTypes = {
  sizeUp: {
    fn: (a, b) => a.size - b.size
  },
  sizeDown: {
    fn: (a, b) => b.size - a.size
  },
  colorUp: {
    fn: (a, b) => a.color - b.color
  },
  colorDown: {
    fn: (a, b) => b.color - a.color
  },
  alphabeticUp: {
    fn: (a, b) => a.alphabetic.localeCompare(b.alphabetic)
  },
  alphabeticDown: {
    fn: (a, b) => b.alphabetic.localeCompare(a.alphabetic)
  },
  default: {
    class: 'sort',
    fn: (a, b) => a
  }
};

