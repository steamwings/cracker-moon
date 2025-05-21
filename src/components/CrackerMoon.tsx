import React from 'react';
import Editor from '@hackernoon/rich-markdown-editor'
import { debounce } from 'radash';

import snApi from 'sn-extension-api';

const CrackerMoon = () => {

  const onChange = debounce({ delay: 50 }, (value) => {
    const val = value();
    console.log('onChange', val);
    snApi.text = val;
  })

  return (
    <Editor
      // TODO Remove once using theme
      dark={true}
      defaultValue={snApi.text}
      // TODO Use embeds={[
      placeholder="Type here..."
      readOnly={snApi.locked}
      readOnlyWriteCheckboxes={true}
      sponsored={false}
      // TODO Use theme parameter
      //theme={theme}
      onChange={onChange}
      //TODO
      //onClickLink
      //onSearchLink
      uploadImage={async (file) => {
        return URL.createObjectURL(file);
      }}
    />
  );
}

export default CrackerMoon
