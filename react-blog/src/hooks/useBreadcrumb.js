import { useEffect } from 'react';
import useBus from './useBus';

export default function useBreadcrumb(list = []) {
  const bus = useBus();

  // 替代 composeWillmont,componentDidUpdate,componentWillUnmont
  useEffect(() => {
    // componentWillmont 和 componentDidUpdate 执行
    bus.emit('breadcrumbList', list);
    // componentWillUnmont 执行
    return () => {
      bus.emit('breadcrumbList', []);
    };
  }); // 不传入参数，则使用组件的 state props
}
