import React from 'react';
import Editor from '@hackernoon/rich-markdown-editor'

import snApi from 'sn-extension-api';

const CrackerMoon = () => {
  return (
    <Editor
      autoFocus
      defaultValue={snApi.text}
      // TODO Use embeds={[
      placeholder="get crackin'!"
      readOnly={snApi.locked}
      sponsored={false}
      // TODO Use theme parameter
      //theme={theme}
      onChange={value => {
        snApi.text = value();
      }}
    />
  );
}



export default CrackerMoon
