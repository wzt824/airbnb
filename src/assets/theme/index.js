const theme = {
  color: {
    primaryColor: '#FF385C',
    secondaryColor: '#00848A'
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222',
    fontWeight: 600
  },
  mixin: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }`
  }
}

export default theme