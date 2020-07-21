import React from 'react';
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import BT4DanLayout from './components/BT4DanLayout/BT4DanLayout';
// eslint-disable-next-line
import ExampleGlasses from './renderwithstate/ExampleGlasses';
// eslint-disable-next-line
import DemoProps from './props/DemoProps';
// eslint-disable-next-line
import BaiTapLayout from './components/bai_tap_layout/BaiTapLayout';

import ExampleCard from './LiftingUpSate/ExampleCard';

export default function App() {
  return (
    <div className="App titleDemo">
      {/* <BaiTapLayout/> */}
      {/* <BT2/> */}
      {/* <DataBinding/> */}
      {/* <BT3Layout/> */}
      {/* <EventBinding/> */}
      {/* <RenderWithSate/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithMap/> */}
      {/* <BT4DanLayout />
      <hr/>
      <ExampleGlasses/> */}
      {/* <DemoProps/> */}
      <ExampleCard />

    </div>
  );
}