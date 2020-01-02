import React from 'react';
import { register, Layout } from '@storybook/addon-devkit';

import { getTheme, getThemeInfoList, getSelectedValue } from '../selectors';
import SelectTheme from './components/SelectTheme';
import ThemeBrowser from './components/ThemeBrowser';

import '../config';
import ColorDetails from './components/ColorDetails';
import * as actions from '../actions';

const AddonThemingPanel = ({
  theme,
  themeInfoList,
  selectedValue,
  setCurrent,
  selectValue,
  changeSelectedColor,
  isFirstDataReceived,
}) =>
  isFirstDataReceived ? (
    <Layout name="adk-tmp">
      <SelectTheme themeInfoList={themeInfoList} setCurrent={setCurrent} />
      <ThemeBrowser theme={theme} selectValue={selectValue} />
      <ColorDetails
        selectedValue={selectedValue}
        onChange={changeSelectedColor}
      />
    </Layout>
  ) : (
    <p>Waiting for data</p>
  );

register(
  {
    themeInfoList: getThemeInfoList,
    theme: getTheme,
    selectedValue: getSelectedValue,
  },
  ({ global }) => ({
    setCurrent: global(actions.setCurrent),
    selectValue: global(actions.selectValue),
    changeSelectedColor: global(actions.changeSelectedColor),
  }),
)(AddonThemingPanel);
