
export const getAsset = (path) =>
  `${process.env.NODE_ENV === 'production' ? '/RiveyraNew' : ''}${path}`;
