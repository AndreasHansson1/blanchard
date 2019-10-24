export default {
  colors: {
    text: '#333',
    background: '#fff',
    primary: 'rgba(68, 114, 175, 1)',
    secondary: 'rgba(68, 114, 175, .8)',
    lightGrey: '#f8f8f8'
  },
  boxshadow: 'box-shadow: 2px 2px 12px 0 rgba(0, 0, 80, 0.15)',
  borderRadius: 'border-radius: 5px',

  breakpoints: ['480px', '600px', '960px'],

  styles: {
    // the keys used here reference elements in MDX
    // h1: {
    //   // the style object for each element
    //   // can reference other values in the theme
    //   fontFamily: 'heading',
    //   fontWeight: 'heading',
    //   lineHeight: 'heading',
    //   marginTop: 0,
    //   marginBottom: 3,
    // },
    a: {
      color: 'primary',
      ':hover, :focus': {
        color: 'secondary'
      }
    }
    // more styles can be added as needed
  }
};
