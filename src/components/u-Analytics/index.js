import ga from 'ga-react-router';

export const pageview = function pageview(props) {
  return ga('send', 'pageview', props.pathname)
};
