export const draftStep = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return true
  else {
    let s = parseInt(status)
    if (s === 0 || s === 1)
      return true
    else
      return false
  }
}

export const notCompleteApplication = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return true
  else {
    let s = parseInt(status)
    if (s < 4)
      return true
    else
      return false
  }
}

export const giveJury = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false
  else {
    let s = parseInt(status)
    if (s === 6)
      return true
    else
      return false
  }
}

export const chooseInterview = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false
  else {
    let s = parseInt(status)
    if (s === 7)
      return true
    else
      return false
  }
}

export const giveMCQ = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false
  else {
    let s = parseInt(status)
    if (s === 4)
      return true
    else
      return false
  }
}

export const doMCQ = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false
  else {
    let s = parseInt(status)
    if (s === 5)
      return true
    else
      return false
  }
}

export const decision = (status: string | undefined): boolean => {
  {/* if new application */ }
  if (status === undefined)
    return false
  else {
    let s = parseInt(status)
    if (s < 10)
      return true
    else
      return false
  }
}




