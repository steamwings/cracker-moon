import React from 'react';
import Editor from '@hackernoon/rich-markdown-editor'
import snApi from 'sn-extension-api';
import { theme } from 'theme';

class CrackerMoon extends React.Component {
  editor: Editor;

  constructor(props) {
    super(props);
    this.editor = null;
  }

  onChange = (value: () => string) => {
    snApi.text = value();
  }

  onSearchLink = async (searchTerm: string) =>  {
    const results = this.editor.getHeadings();

    return results.map(result => {
      return { title: result.title, subtitle: `H${result.level}`, url: '#' + result.id };
    }).filter(result => result.title.match(searchTerm));
  }

  onClickLink = async (href, _event) => {
    let url = new URL(href);
    if (url.pathname == '/' && url.hash.length > 0) {
      window.open(href, "_blank");
    }
    // NOTE `this.editor.scrollToAnchor(url.hash)` is available
    // but the current implementations are attempting to open a new browser window.
    // The SN app may need to be updated to support intra-note navigation.
    // An SN API update would be required to navigate to tags or other notes.
  }

  render() {
    return (
      <Editor
        ref={(el) => { this.editor = el; }}
        defaultValue={snApi.text}
        // TODO Use embeds={[
        onChange={this.onChange.bind(this)}
        placeholder="Type here..."
        readOnly={snApi.locked}
        readOnlyWriteCheckboxes={true}
        sponsored={false}
        theme={theme}
        onSearchLink={this.onSearchLink.bind(this)}
        onClickLink={this.onClickLink.bind(this)}
        uploadImage={async (file) => {
          return URL.createObjectURL(file);
        }}
      />
    );
  }
}

export default CrackerMoon;
