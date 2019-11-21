export const draftStep = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return true;
  else {
    let s = parseInt(status);
    return (s === 0 || s === 1);
  }
};

export const notCompleteApplication = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return true;
  else {
    let s = parseInt(status);
    return (s < 4);
  }
};

export const giveJury = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false;
  else {
    let s = parseInt(status);
    return (s === 6);
  }
};

export const chooseInterview = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false;
  else {
    let s = parseInt(status);
    return (s === 7);
  }
};

export const giveMCQ = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false;
  else {
    let s = parseInt(status);
    return (s === 4);
  }
};

export const doMCQ = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false;
  else {
    let s = parseInt(status);
    return (s === 5);
  }
};

export const decision = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false;
  else {
    let s = parseInt(status);
    return (s < 10);
  }
};




