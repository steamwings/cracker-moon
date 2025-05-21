export interface TestData {
  title: string;
  text: string;
  meta?: any;
}

const EMPTY = {
  title: 'Empty',
  text: ''
};
const SMALL = {
  title: 'Small',
  text: 'This is the note content for the small example\n\n\
  [google](https://www.google.com)\
  ',
  meta: {
    rows: 3
  }
};

const LARGE = {
  title: 'Large',
  text: "\
  # big header \n\
  #gobigorgohome\n\n\
  content \n\
  [link to sub header](#h-sub-header)\n\
  [link to another sub header](#h-another-sub-header)\n\
  \n\
  ## sub header \n\
  content \n\
  \n\
  ### sub sub header \n\
  content \n\
  \n\
  #### sub sub sub header \n\
  content \n\
  [link to sub sub header](#h-sub-sub-header)\n\
  \n\
  ##### sub sub sub sub header \n\
  content \n\
  \n\
  ## another sub header \n\
  content \n\
  \n\
  ### another sub sub header \n\
  ",
  meta: {
    rows: 10
  }
};

export const TEST_DATA: TestData[] = [SMALL, LARGE, EMPTY];
