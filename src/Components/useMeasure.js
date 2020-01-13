import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useMeasure() {
  // bind dom element to size
  const ref = useRef();
  //
  const [ bounds, set ] = useState({ left: 0, top: 0, width: 0, height: 0 });
  // is resized?
  const [ ro ] = useState(() => new ResizeObserver(([ entry ]) => set(entry.contentRect)));
  // track screensize
  useEffect(() => (ro.observe(ref.current), ro.disconnect), []);
  //
  return [ { ref }, bounds ];
}
