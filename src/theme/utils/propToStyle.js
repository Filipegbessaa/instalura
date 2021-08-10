import breakpointsMedia from './breakpointsMedia';

function propToStyle(propName) {
  return (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    const propValue = props[propName]; // objeto ou string

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: props[propName],
      };
    }
    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }
    return null
  }
};

export default propToStyle