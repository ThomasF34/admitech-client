
interface IAttachement {
  id?: number,
  attach_type: string,
  url: string,
  file?: any,
  fileName: string
}

interface IOption {
  attach_type: string,
  typeConverted: string
}

const getListOfTypesOfFiles = (attachments: IAttachement[]): IOption[] => {

  let attachmentsIOptions: IOption[] = attachments.map((attach) => {
    const option: IOption = { attach_type: attach.attach_type, typeConverted: getTypeConverted(attach.attach_type) }
    return option;
  });
  const default_value: IOption = { attach_type: '', typeConverted: '--Type de fichier--' };
  const cover_letter: IOption = { attach_type: 'cover_letter', typeConverted: 'Lettre de motivation' };
  const cv: IOption = { attach_type: 'cv', typeConverted: 'CV' };
  const bac_marks: IOption = { attach_type: 'bac_marks', typeConverted: 'Notes du Bac' };
  const year_marks: IOption = { attach_type: 'year_marks', typeConverted: 'Notes' };
  const current_year_marks: IOption = { attach_type: 'current_year_marks', typeConverted: 'Notes année courante' };
  const notice_further_study: IOption = { attach_type: 'notice_further_study', typeConverted: 'Avis poursuite d\'études' };

  let attachmentsBacis = [default_value, cover_letter, cv, bac_marks, year_marks, current_year_marks, notice_further_study];

  let indexesToPop: number[] = [];
  attachmentsIOptions.forEach((a) => {
    attachmentsBacis.filter((elem => {
      if (elem.attach_type === a.attach_type) { indexesToPop.push(attachmentsBacis.indexOf(elem)) }
      return true;
    }));
  })

  function arrayRemove(arr: IOption[], value: IOption) { return arr.filter((ele) => { return ele !== value; }); }

  for (let i in indexesToPop) { attachmentsBacis = arrayRemove(attachmentsBacis, attachmentsBacis[indexesToPop[i]]); }
  return attachmentsBacis;
}

const getBasicsAttachements = () => {
  const default_value: IOption = { attach_type: '', typeConverted: '--Type de fichier--' };
  const cover_letter: IOption = { attach_type: 'cover_letter', typeConverted: 'Lettre de motivation' };
  const cv: IOption = { attach_type: 'cv', typeConverted: 'CV' };
  const bac_marks: IOption = { attach_type: 'bac_marks', typeConverted: 'Notes du Bac' };
  const year_marks: IOption = { attach_type: 'year_marks', typeConverted: 'Notes' };
  const current_year_marks: IOption = { attach_type: 'current_year_marks', typeConverted: 'Notes année courante' };
  const notice_further_study: IOption = { attach_type: 'notice_further_study', typeConverted: 'Avis poursuite d\'études' };
  return [default_value, cover_letter, cv, bac_marks, year_marks, current_year_marks, notice_further_study];
}

const getTypeConverted = (attach_type: string): string => {
  const typesConverted = ['--Type de fichier--', 'Lettre de motivation', 'CV', 'Notes du Bac', 'Notes', 'Notes année courante', 'Avis poursuite d\'études'];
  const attachTypes = ['', 'cover_letter', 'cv', 'bac_marks', 'year_marks', 'current_year_marks', 'notice_further_study'];
  const index = attachTypes.indexOf(attach_type);
  return typesConverted[index];
}


export { getListOfTypesOfFiles, getTypeConverted, getBasicsAttachements };