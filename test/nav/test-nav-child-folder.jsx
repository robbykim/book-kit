import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import { Provider } from 'react-redux';
import store from '../../src/js/redux/store';
import NavChildFolder from '../../src/js/nav/nav-child-folder';

const should = chai.should();

describe('Nav Child Folder', () => {
  it('Renders the initial NavChildFolder component', () => {
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

    const result = renderer.getRenderOutput();
    console.log(result);
    result.type.should.equal(NavChildFolder);
  });
});
