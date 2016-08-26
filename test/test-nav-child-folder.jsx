import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { should } from 'chai';
import store from '../src/js/redux/store';
import NavChildFolder from '../src/js/nav/nav-child-folder';

describe('Nav Child Folder', () => {
  it('Renders the intial NavChildFolder component', () => {
    const show = false;
    const folder = {
      foldername: 'folder',
      folderid: 'id',
    };

    const onShowEdit = () => {
      // test function
    };

    const renderer = TestUtils.createRenderer();
    renderer.render(
      <Provider store={store}>
        <NavChildFolder
          show={show}
          folder={folder}
          onShowEdit={onShowEdit}
        />
      </Provider>
    );
  });
});
