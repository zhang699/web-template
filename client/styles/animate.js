export const translate = {

};
export const transition = {
  transition: 'all 300ms cubic-bezier(0.34, 1.61, 0.7, 1)',
}

export  const rotate = {
  transform: 'rotate(90deg)'
};


export const animateMixin = element => (event, animate) => ({ ...element, [event]: { ...animate }});
