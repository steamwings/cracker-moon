import React from 'react';
import Editor from '@hackernoon/rich-markdown-editor'

const CrackerMoon = () => {
  return (
    <Editor
      autoFocus={true}
      dark={true} // TODO support at least light and dark
      // TODO embeds={[
      placeholder="get crackin'!"
      readOnly={false}
      sponsored={false}
    />
  );
}

export default CrackerMoon
